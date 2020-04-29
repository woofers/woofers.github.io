import React from 'react'
import { graphql } from 'gatsby'
import { Markdown, removeBadges } from '../components/markdown'
import Org from '../components/org'
import Page from '../components/page'
import SEO from '../components/seo'
import ProjectLink from '../components/project-link'
import dlv from 'dlv'
import { mutateRepoNames, type } from '../utils/repo'
import Title from '../components/title'

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
      <Title>{fullName}</Title>
      <ProjectLink to={repo.url} type="github" />
      { repo.homepage && <ProjectLink to={repo.homepage} type={type(repo)} /> }
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
    ...RepoExclude
    repositories(name: {eq: $repo}) {
      ...GitHub
      ...Readme
    }
  }
`
