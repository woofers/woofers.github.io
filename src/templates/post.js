import React from "react"
import { css } from 'emotion'

const titleStyle = css(`
  div:first-child h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 0.75em;
  }
`)

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.orga
    const { title, date } = post.meta



    return (
      <div>
        <div style={{ marginBottom: '2em' }}>
          {title ? <h1>{title}</h1> : null }
          {date ? <p>{date}</p> : null }
        </div>
        <div className={style} dangerouslySetInnerHTML={{ __html: post.html }} />
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
