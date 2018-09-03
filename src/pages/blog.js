import React from 'react'
import Link from 'gatsby-link'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allOrga.edges
    const _posts = posts.map ( ({ node }) => {
      const path = node.fields.slug
      const title = node.meta.title || path
      const date = node.meta.date
      const include = '/blog/'
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
