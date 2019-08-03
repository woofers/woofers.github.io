import React, { Component } from "react"
import { Content } from '../components/content'
import { Page } from '../components/page'
import { AboutProfile as Profile } from '../components/profile'
import { graphql } from 'gatsby'
import { withTheme } from 'emotion-theming'

class AboutTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    const { margins } = this.props.theme
    return (
      <Page title={post.meta.title} site={this.props.data.site.siteMetadata.title}>
        <Profile width={margins.profile} height={margins.profile} />
        <Content html={post.html} hideTitle={true} />
      </Page>
    )
  }
}

export default withTheme(AboutTemplate)

export const pageQuery = graphql`
  query($slug: String!) {
    ...Title
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
