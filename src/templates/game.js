import React, { Component } from "react"
import { BlogTitle } from '../components/blog-title'
import { Breadcrumb } from '../components/breadcrumb'
import { Game } from '../components/game'
import { Page } from '../components/page'
import { graphql } from 'gatsby'

class GameTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    const { title, date, icon, landscape, lang, game, placeholder } = post.meta
    const iconMode = post.meta.icon_mode
    const iconType = post.meta.icon_type
    const links = [{ name: 'Projects', link: '/projects/'},
                   { name: `${title}` }]
    return (
      <Page title={title}
            site={this.props.data.site.siteMetadata.title}>
        <Breadcrumb links={links} />
        <BlogTitle title={title} date={date}
                   icon={{ image: icon, mode: iconMode, type: iconType }} />
        <Game title={title} src={game}
              portrait={landscape === 'nil'}
              instruction={post.html}
              lang={lang}
              placeholder={placeholder} />
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
