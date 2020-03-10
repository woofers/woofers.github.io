import React from 'react'
import { graphql } from 'gatsby'
import { Markdown, removeBadges } from '../components/markdown'
import Org from '../components/org'
import Page from '../components/page'
import SEO from '../components/seo'
import dlv from 'dlv'
import { mutateRepoNames } from '../utils/repo'

const GitHubTemplate = p => {
  const { data } = p
  const { repositories, site } = data
  const repo = repositories
  const { siteMetadata } = site
  const { exclude } = siteMetadata
  const { fullName } = repo
  mutateRepoNames([{ node: repo }], exclude)
  const md = dlv(repo.readme, 'text')
  const org = dlv(repo.readmeOrg, 'text')
  return (
    <Page>
      <SEO title={fullName} />
      <div>
        { org && !md ?
            <Org content={org} repo={repo} />
          : <Markdown content={md} repo={repo} filters={[removeBadges]} />
        }
      </div>
    </Page>
  )
}

export default GitHubTemplate

export const pageQuery = graphql`
  query($repo: String!) {
    site {
      siteMetadata {
        title
        resume
        exclude
        nav {
          projects
          blog
          about
        }
      }
    }
    repositories(name: {eq: $repo}) {
      name
      description
      url
      homepage
      stars {
        totalCount
      }
      license {
        name
      }
      topics {
        nodes {
          topic {
            name
          }
        }
      }
      readme {
        text
      }
      readmeOrg {
        text
      }
    }
  }
`
