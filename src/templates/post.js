import React, { Component } from "react"
import { css } from 'emotion'
import DocumentTitle from 'react-document-title'
import { margins } from '../components/globals'

const org = css(`
  div {
    margin-bottom: ${margins.small};
  }
`)

const titleStyle = css(`
  div:first-child h1 {
    display: none;
  }
`)

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.orga
    const siteName = this.props.data.site.siteMetadata.title
    const { title, date } = post.meta
    const showTitle = post.meta.show_title !== 'nil'
    const style = ((title && showTitle) || date) ? org : `${org} ${titleStyle}`
    let tab = `${title} - ${siteName}`
    if (!title) tab = siteName
    return (
      <DocumentTitle title={tab}>
        <article>
          <div style={{ textAlign: 'right' }}>
            {showTitle ? <h1>{title}</h1> : null }
            {date ? <p>{date}</p> : null }
          </div>
          <div className={style} dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </DocumentTitle>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query Blog($slug: String!) {
    ...Post
  }
`
