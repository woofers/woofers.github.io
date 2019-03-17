import React, { Component } from "react"
import { BlogTitle } from '../components/blog-title'
import { Breadcrumb } from '../components/breadcrumb'
import { Game } from '../components/game'
import { Page } from '../components/page'
import { graphql } from 'gatsby'

class GameTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    const { title, date, icon } = post.meta
    const iconMode = post.meta.icon_mode
    const links = [{ name: 'Projects', link: '/projects/'},
                   { name: `${title}` }]
    return (
      <Page title={post.meta.title}
            site={this.props.data.site.siteMetadata.title}>
        <Breadcrumb links={links} />
        <BlogTitle title={title} date={date}
                   icon={{ image: icon, mode: iconMode }} />
        <Game title={title} src={post.meta.game}
              portrait={post.meta.landscape === 'nil'}
              instruction={post.html} />
      </Page>
    )
  }
}

export default GameTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    ...Title
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
