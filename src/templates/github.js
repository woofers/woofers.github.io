import React, { Component } from "react"
import { Breadcrumb } from '../components/breadcrumb'
import { BlogTitle } from '../components/blog-title'
import { Content } from '../components/content'
import { Page } from '../components/page'
import { comments } from '../components/comments'
import Markdown from '../components/markdown'
import { graphql } from 'gatsby'

class GitHubTemplate extends Component {
  render() {
    console.log(this.props.data)
    const repo = this.props.data.repositories
    const md = repo.readme ? repo.readme.text : ''
    const { projects } = this.props.data.site.siteMetadata.nav
    const links = [{ name: 'Projects', link: projects },
                   { name: repo.name }]
    return (
      <Page title={repo.name} site={this.props.data.site.siteMetadata.title}>
        <Breadcrumb links={links} />
        <BlogTitle title={repo.name} />
        <Markdown content={md} repo={repo.name} />
      </Page>
    )
  }
}

export default GitHubTemplate

export const pageQuery = graphql`
  query($repo: String!) {
    ...Title
    ...Nav
    repositories(name: {eq: $repo}) {
      name
      readme {
        text
      }
    }
  }
`
