import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import cheerio from 'cheerio'

const titleStyle = css(`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 0.75em;
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
        <div style={{ marginBottom: '1.5em' }} key={path}>
          <h1 style={{ marginBottom: '0.25em' }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h1>
          {date ? <span style={{ fontWeight: 'bold' }}>{date}</span> : null }
          { preview.length ?
            <div>
              <div style={{ marginTop: '1em', marginBottom: '1em' }} dangerouslySetInnerHTML={{ __html: preview.html() }} />
              <Link style={{ color: '#FFFFFF'}} to={node.fields.slug}>Continue reading . . . </Link>
            </div>: null}
        </div>
      )
    })
    return (
      <div>
        {_posts}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allOrga {
      edges {
        node {
          fields {
            slug
          }
          meta
          html
        }
      }
    }
  }
`
