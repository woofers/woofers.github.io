import React, { Component } from "react"
import { BlogTitle } from '../components/blog-title'
import { Content } from '../components/content'
import { Page } from '../components/page'
import { graphql } from 'gatsby'

class PageTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    return (
      <Page post={post} site={this.props.data.site.siteMetadata.title}>
        <Content html={post.html} hideTitle={true} />
      </Page>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    ...Title
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
