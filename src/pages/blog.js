import React from 'react'
import Link from 'gatsby-link'

class BlogIndex extends React.Component {
  sortedPosts() {
    let posts = this.props.data.allOrga.edges
    const date = (node) => node.meta ? node.meta.date : ''
    const safeCompare = (a, b, func) =>
      (a || b) ? (!a ? 1 : !b ? -1 : func(a, b) ? 1 : -1) : 0;
    posts.sort(function(a, b) {
      return safeCompare(date(a.node), date(b.node), (a, b) => new Date(a) < new Date(a));
    });
    let year
    posts.map (({ node }) => {
      let current = date(node)
      let currentDate = new Date(current)
      if (!year | currentDate.getFullYear() !== year) {
        year = currentDate.getFullYear()
        node.year = current ? year : "?"
      }
    })
    return posts
  }

  render() {
      const _posts = this.sortedPosts().map (({ node }) => {
      const path = node.fields.slug
      const meta = node.meta
      const title = meta.title || path
      const include = '/blog/'
      const date = meta.date
      if (!path || !path.startsWith(include)) return
      return (
        <div>
          {node.year ? <h1>{node.year}</h1> : null }
          <h2 style={{ marginBottom: '0.2em' }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h2>
          {date ? <p>{date}</p> : null }
        </div>
      )
    })
    return (
      <div>
        <div style={{ marginBottom: '2em', textAlign: 'center' }}>
          <h1>Posts</h1>
          <p>Here's some stuff I wrote:</p>
        </div>
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
        }
      }
    }
  }
`
