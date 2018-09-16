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
          <h2 style={{ marginBottom: '0.2em' }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h2>
          {date ? <p>{date}</p> : null }
        </div>
      )
    })
    return (
      <div>
        <center style={{ marginBottom: '2em' }}>
          <h1>Posts</h1>
          <p>Here's some stuff I wrote:</p>
        </center>
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
