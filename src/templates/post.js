import React, { Component } from "react"
import { Breadcrumb } from '../components/breadcrumb'
import { BlogTitle } from '../components/blog-title'
import { Content } from '../components/content'
import { Page } from '../components/page'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.orga
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

export default PostTemplate

export const pageQuery = graphql`
  query Blog($slug: String!) {
    ...Post
  }
`
