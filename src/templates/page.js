import React, { Component } from "react"
import { Content } from '../components/content'
import { Page } from '../components/page'
import { graphql } from 'gatsby'

class PageTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    return (
      <Page title={post.meta.title} site={this.props.data.site.siteMetadata.title}>
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
