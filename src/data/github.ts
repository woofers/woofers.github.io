import { mutateRepoNames } from 'utils'
import { post } from './http'
import { getPackage } from './npm'
import { bundleMDX } from 'mdx-bundler'
import { rehypePlugins, remarkPlugins } from '../../remark'
import { data as readmeFix } from './fix'

const exclude = {
  link: true,
  'discord-jam-2': 'DOGE: BOIS',
  woofers3d: 'Woofers 3D',
  'ludum-dare-44': 'ALIEN, e x p a n s i o n .',
  'react-pico-8': 'React PICO-8',
  'react-yat': 'React YAT',
  'opengraph-api': true,
  'org-invoice-template': true,
  'react-ludum-dare': true,
  'woofers.github.io': true,
  'kangaroo-country': true,
  chess: true,
  resume: true,
  'java-formatter': true,
  battlesnake: true,
  'battlesnake-2018': true,
  'battlesnake-java-template': true,
  'libgdx-tools-installer': true,
  'challenger-deep-rofi': true,
  dotfiles: true,
  'k9-krew': true,
  'course-codes-bugs': true,
  'noto-emoji-react': true,
  'react-chameleon-theme-color': true,
  'qmk-indicator': true,
  'quefrency-case': true,
  woofers: true,
  m3: true,
  'raycast-color-picker': true,

  'jaxson-site': true,
  'ludum-dare-badges': true,
  groove: true
} as const

type ExcludeList = typeof exclude

const repoQuery = `
query GetRepo($name: String!) {
  user(login: "woofers") {
    repository(name: $name) {
      name
      description
      url
      homepage: homepageUrl
      stars: stargazers {
        totalCount
      }
      license: licenseInfo {
        name
      }
      topics: repositoryTopics(first: 100) {
        nodes {
          topic {
            name
          }
        }
      }
      readme: object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
      readmeOrg: object(expression: "HEAD:README.org") {
        ... on Blob {
          text
        }
      }
    }
  }
}
`

const query = `
{
  user(login: "woofers") {
    repositories(first: 100, isFork: false, privacy: PUBLIC, isLocked: false, ownerAffiliations: OWNER, orderBy: {field: CREATED_AT, direction: DESC}) {
      edges {
        node {
          name
          description
          topics: repositoryTopics(first: 100) {
            nodes {
              topic {
                name
              }
            }
          }
          stars: stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`

const fromGithub = async <T extends {}>({
  query,
  variables
}: {
  query: string
  variables?: {}
}) => {
  const token = process.env.GH_TOKEN
  const headers = {
    Authorization: `bearer ${token}`.trim(),
    'Content-Type': 'application/json'
  }
  const data = await post<{ data: T }>('https://api.github.com/graphql', {
    headers,
    body: { query, variables },
    next: { revalidate: 60 }
  })
  return data?.data
}

export type Repo = {
  name: string
  description: string
  fullName: string
  url: string
  link?: string
  homepage?: string
  stars: { totalCount: number }
  license?: { name: string }
  topics?: { nodes: { topic: { name: string } }[] }
  readme: { text: string }
  readmeOrg?: { text: string }
  code: string
  downloads: number
}

const getRepoLink = (name: string) => `/projects/${name}`

type MdxOptions = Parameters<typeof bundleMDX>[0]['mdxOptions']

const mdxOptions: MdxOptions = options => {
  options.remarkPlugins = [...(options.remarkPlugins ?? []), ...remarkPlugins]
  options.rehypePlugins = [...(options.rehypePlugins ?? []), ...rehypePlugins]
  return options
}

export const getRepo = async (name: string) => {
  const data = await fromGithub<{ user: { repository: Repo } }>({
    query: repoQuery,
    variables: { name }
  })
  const repo = data.user.repository
  mutateRepoNames(repo, exclude)
  repo.link = getRepoLink(repo.name)
  if (!repo || !repo.fullName) return null

  if (repo.name === 'use-eye-dropper') {
    repo.readme.text = readmeFix
  }
  try {
    const mdx = await bundleMDX({ source: repo.readme.text, mdxOptions })
    repo.code = mdx.code
  } catch (e) {
    console.log(e, '<<', name)
    repo.code = ''
  }
  return repo
}

export const getRepos = async () => {
  const data = await fromGithub<{
    user: { repositories: { edges: { node: Repo }[] } }
  }>({ query })
  const repos = data.user.repositories.edges
    .map(({ node }) => node)
    .filter(
      repo => typeof exclude?.[repo?.name as keyof ExcludeList] !== 'boolean'
    )
    .map(repo => {
      mutateRepoNames(repo, exclude)
      repo.link = getRepoLink(repo.name)
      return repo
    })
    .sort((a, b) => b.stars.totalCount - a.stars.totalCount)

  for (let repo of repos) {
    try {
      const pkg = await getPackage(repo.name)
      repo.downloads = pkg.downloads
    } catch (e) {
      repo.downloads = 0
    }
  }
  return repos
}
