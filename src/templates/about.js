import React, { Component } from "react"
import { BlogTitle } from '../components/blog-title'
import { Content } from '../components/content'
import { Page } from '../components/page'
import { Profile } from '../components/profile'
import { margins } from '../components/globals'

class AboutTemplate extends Component {
  render() {
    const post = this.props.data.orga
    const { profile } = post.meta
    const alt = post.meta.profile_alt
    return (
      <Page post={post} site={this.props.data.site.siteMetadata.title}>
        <Profile width={margins.profile} height={margins.profile} img={profile} alt={alt} />
        <Content html={post.html} hideTitle={true} />
      </Page>
    )
  }
}

export default AboutTemplate

export const pageQuery = graphql`
  query About($slug: String!) {
    ...Post
  }
`
