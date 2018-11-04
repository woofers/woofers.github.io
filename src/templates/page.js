import React, { Component } from "react"
import { BlogTitle } from '../components/blog-title'
import { Content } from '../components/content'
import { Page } from '../components/page'

class PageTemplate extends Component {
  render() {
    const post = this.props.data.orga
    return (
      <Page post={post} site={this.props.data.site.siteMetadata.title}>
        <Content html={post.html} hideTitle={true} />
      </Page>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query Page($slug: String!) {
    ...Post
  }
`
