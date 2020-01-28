import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import cheerio from 'cheerio'
import { Page } from '../components/page'
import { Content } from '../components/content'

const org = theme => css`
  div {
    margin-bottom: ${theme.margins.small};
  }
`

class BlogIndex extends React.Component {
  sortedPosts() {
    let posts = this.props.data.allOrgContent.edges
    const date = (node) => node.metadata ? node.metadata.date : ''
    const safeCompare = (a, b, func) =>
      (a || b) ? (!a ? 1 : !b ? -1 : func(a, b) ? 1 : -1) : 0;
    posts.sort(function(a, b) {
      return safeCompare(date(a.node), date(b.node), (a, b) => new Date(a) < new Date(b));
    });
    return posts
  }

  render() {
    const continueReading = 'Continue reading'
    const siteMeta = this.props.data.site.siteMetadata
    const site = siteMeta.title
    const nav = siteMeta.nav
    const _posts = this.sortedPosts().map (({ node }) => {
      const path = node.fields.slug
      const meta = node.metadata
      const title = meta.title || path
      const include = nav.blog
      const date = meta.date
      if (!path || !path.startsWith(include)) return null
      let preview = cheerio.load(node.html)('p', 'body')
      preview.find('h1').remove()
      return (
        <div css={ theme => ({ marginBottom: theme.margins.medium }) } key={path}>
          <h1 css={ theme => ({ marginBottom: theme.margins.superSmall }) }>
            <Link css={ theme => ({ lineHeight: theme.fonts.large }) } to={node.fields.slug}>{title}</Link>
          </h1>
          {date ? <span style={{ fontWeight: 'bold' }}>{date}</span> : null }
          { preview.length ?
            <div>
              <Content html={preview.html()} />
              <Link css={ theme => ({ color: `${theme.colors.text} !important` }) } to={node.fields.slug}
                    aria-label={`${continueReading} ${title}`}>
                  {continueReading} . . .
              </Link>
            </div>: null}
        </div>
      )
    })
    return (
      <Page title='Posts' site={site}>
        <div css={org}>
          {_posts}
        </div>
      </Page>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    ...Title
    ...Nav
    allOrgContent {
      edges {
        node {
          ...Content
        }
      }
    }
  }
`
