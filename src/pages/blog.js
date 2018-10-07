import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import cheerio from 'cheerio'
import DocumentTitle from 'react-document-title'
import { colours, margins } from '../components/globals'

const org = css(`
  div {
    margin-bottom: ${margins.small};
  }
`)

class BlogIndex extends React.Component {
  sortedPosts() {
    let posts = this.props.data.allOrga.edges
    const date = (node) => node.meta ? node.meta.date : ''
    const safeCompare = (a, b, func) =>
      (a || b) ? (!a ? 1 : !b ? -1 : func(a, b) ? 1 : -1) : 0;
    posts.sort(function(a, b) {
      return safeCompare(date(a.node), date(b.node), (a, b) => new Date(a) < new Date(a));
    });
    return posts
  }

  render() {
    const _posts = this.sortedPosts().map (({ node }) => {
      let preview = cheerio.load(node.html)('div', 'body')
      preview.find('h1').remove()
      const path = node.fields.slug
      const meta = node.meta
      const title = meta.title || path
      const include = '/blog/'
      const date = meta.date
      if (!path || !path.startsWith(include)) return
      return (
        <div style={{ marginBottom: margins.medium }} key={path}>
          <h1 style={{ marginBottom: margins.superSmall }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h1>
          {date ? <span style={{ fontWeight: 'bold' }}>{date}</span> : null }
          { preview.length ?
            <div>
              <div style={{ marginTop: margins.small }} dangerouslySetInnerHTML={{ __html: preview.html() }} />
              <Link style={{ color: colours.text }} to={node.fields.slug}>Continue reading . . . </Link>
            </div>: null}
        </div>
      )
    })
    const siteName = this.props.data.site.siteMetadata.title
    const title = `Posts - ${siteName}`
    return (
      <DocumentTitle title={title}>
        <div className={org}>
          {_posts}
        </div>
      </DocumentTitle>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    ...Title
    allOrga {
      edges {
        node {
          ...Content
        }
      }
    }
  }
`
