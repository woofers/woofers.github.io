import React, { Component } from "react"
import { BlogTitle } from '../components/blog-title'
import { Breadcrumb } from '../components/breadcrumb'
import { Game } from '../components/game'
import { Page } from '../components/page'
import { graphql } from 'gatsby'

class GameTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    const path = post.fields.slug
    const { title, date, icon, landscape, lang, game, placeholder } = post.metadata
    const { projects } = this.props.data.site.siteMetadata.nav
    const iconMode = post.metadata.icon_mode
    const iconType = post.metadata.icon_type
    const ludumDare = post.metadata.ludum_dare
    const links = [{ name: 'Projects', link: projects},
                   { name: title, link: path },
                   { name: 'Play' }]
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
              ludumDare={ludumDare}
              placeholder={placeholder} />
      </Page>
    )
  }
}

export default GameTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    ...Title
    ...Nav
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
