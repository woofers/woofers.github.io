import fetch from 'isomorphic-unfetch'
import { mutateRepoNames, type } from 'utils/repo'
import { post } from './http'

const exclude = {
  'discord-jam-2': 'DOGE: BOIS',
  'woofers3d': 'Woofers 3D',
  'ludum-dare-44': 'ALIEN, e x p a n s i o n .',
  'react-pico-8': 'React PICO-8',
  'react-yat': 'React YAT',
  'opengraph-api': true,
  'org-invoice-template': true,
  'react-ludum-dare': true,
  'woofers.github.io': true,
  'kangaroo-country': true,
  'chess': true,
  'resume': true,
  'java-formatter': true,
  'battlesnake-2018': true,
  'battlesnake-java-template': true,
  'libgdx-tools-installer': true,
  'challenger-deep-rofi': true,
  'dotfiles': true,
  'k9-krew': true,
  'course-codes-bugs': true,
  'noto-emoji-react': true,
  'react-chameleon-theme-color': true,
  'qmk-indicator': true,
  'quefrency-case': true
}


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
        }
      }
    }
  }
}
`

const fromGithub = async ({ query, variables }) => {
  const token = process.env.GH_TOKEN
  const headers = {
    Authorization: `bearer ${token}`.trim(),
    'Content-Type': 'application/json',
  }
  const data = await post('https://api.github.com/graphql', {
    headers,
    body: { query, variables },
  })
  return data?.data
}

export const getRepo = async name => {
  const data = await fromGithub({ query: repoQuery, variables: { name } })
  const repo = data.user.repository
  mutateRepoNames(repo, exclude)
  return repo
}

export const getRepos = async () => {
  const data = await fromGithub({ query })
  const repos = data.user.repositories.edges.map(({ node }) => node).filter(repo => typeof exclude?.[repo?.name] !== 'boolean')

  return repos
}
