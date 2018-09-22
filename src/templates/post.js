import React from "react"
import { css } from 'emotion'

const titleStyle = css(`
  div:first-child h1 {
    display: none;
  }
`)

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.orga
    const { title, date } = post.meta
    const style = (title || date) ? '' : titleStyle
    return (
      <div>
        <div style={{ marginBottom: '2em', textAlign: 'right' }}>
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
