import fetch from 'isomorphic-unfetch'
import { post } from './http'

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
    Authorization: `bearer ${token}`,
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
  return data
}

export const getRepos = async () => {
  const data = await fromGithub({ query })
  return data
}
