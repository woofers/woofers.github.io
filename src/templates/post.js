import React from "react"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.orga
    const { title, date } = post.meta



    return (
      <div>
        <center style={{ marginBottom: '2em' }}>
          {title ? <h1>{title}</h1> : null }
          {date ? <p>{date}</p> : null }
        </center>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    orga(fields: { slug: { eq: $slug }}) {
      html
      meta
    }
  }
`
