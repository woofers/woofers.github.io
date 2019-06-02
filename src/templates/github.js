import React, { Component } from "react"
import { Breadcrumb } from '../components/breadcrumb'
import { BlogTitle } from '../components/blog-title'
import { Page } from '../components/page'
import { Markdown, removeBadges } from '../components/markdown'
import Org from '../components/org'
import { graphql } from 'gatsby'
import { mutateRepoNames } from '../utils/repo'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import dlv from 'dlv'
import PageLink from '../components/page-link'
import ProjectButton from '../components/project-button'
import { type } from '../utils/repo'

class GitHubTemplate extends Component {
  render() {
    const repo = this.props.data.repositories
    const { exclude } = this.props.data.site.siteMetadata
    mutateRepoNames([{node: repo}], exclude)
    const md = dlv(repo.readme, 'text')
    const org = dlv(repo.readmeOrg, 'text')
    const { projects } = this.props.data.site.siteMetadata.nav
    const links = [{ name: 'Projects', link: projects },
                   { name: repo.fullName }]
    return (
      <Page title={repo.fullName} site={this.props.data.site.siteMetadata.title}>
        <Breadcrumb links={links} />
        <BlogTitle title={repo.fullName} />
        <PageLink href={repo.url}><Icon icon={faGithub}/> View on GitHub</PageLink>
        { repo.homepage ? <ProjectButton inline={false} href={repo.homepage} type={type(repo)} /> : null}
        { org && !md ?
            <Org content={org} repo={repo} />
          : <Markdown content={md} repo={repo} filters={[removeBadges]} />
        }
      </Page>
    )
  }
}

export default GitHubTemplate

export const pageQuery = graphql`
  query($repo: String!) {
    ...Title
    ...Nav
    ...RepoExclude
    repositories(name: {eq: $repo}) {
      ...RepoContent
      ...Readme
    }
  }
`
