import React, { Component } from "react"
import { Breadcrumb } from '../components/breadcrumb'
import { BlogTitle } from '../components/blog-title'
import { Content } from '../components/content'
import { Page } from '../components/page'
import { comments } from '../utils/comments'
import { graphql } from 'gatsby'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    const { title, date } = post.meta
    const links = [{ name: 'Blog', link: '/blog/'},
                   { name: `${title}` }]
    return (
      <Page post={post} site={this.props.data.site.siteMetadata.title}>
        <Breadcrumb links={links} />
        <BlogTitle title={title} date={date} />
        <Content html={post.html} />
      </Page>
    )
  }
}

export default comments(PostTemplate)

export const pageQuery = graphql`
  query($slug: String!) {
    ...Title
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
