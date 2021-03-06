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
import { css } from '@emotion/react'

const flex = theme => css`
  @media (min-width: ${theme.breakpoints.mobile.breakpoint}) {
    display: flex;
    justify-content: space-between;
  }
`

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
      <div css={flex}>
        <Title>{fullName}</Title>
        <div>
          <ProjectLink to={repo.url} type="github" />
          { repo.homepage && <ProjectLink to={repo.homepage} type={type(repo)} /> }
        </div>
      </div>
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
