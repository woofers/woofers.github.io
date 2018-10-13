import React, { Component } from "react"
import { css } from 'emotion'
import DocumentTitle from 'react-document-title'
import { margins } from '../components/globals'
import makeTitle from '../utils/title'
import { Breadcrumb } from '../components/breadcrumb'

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
    const { title, date } = post.meta
    const slug = post.fields.slug
    const showTitle = post.meta.show_title !== 'nil'
    const style = ((title && showTitle) || date) ? org : `${org} ${titleStyle}`
    const tab = makeTitle(title, this.props.data.site.siteMetadata.title)
    const include = '/blog/'
    let links
    if (slug && slug.startsWith(include)) {
      links = [{ name: 'Blog', link: '/blog/'},
               { name: `${title}` }]
    }
    return (
      <DocumentTitle title={tab}>
        <article>
          {links ? <Breadcrumb links={links} /> : null}
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
