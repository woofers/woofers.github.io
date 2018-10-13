import React, { Component } from "react"
import { css } from 'emotion'
import { Title } from '../components/title'
import { Button } from '../components/button'
import { margins } from '../components/globals'
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
    const site = this.props.data.site.siteMetadata.title
    const include = '/blog/'
    let links
    if (slug && slug.startsWith(include)) {
      links = [{ name: 'Blog', link: '/blog/'},
               { name: `${title}` }]
    }
    return (
      <Title title={title} site={site}>
        <article>
          {links ? <Breadcrumb links={links} /> : null}
          <div style={{ textAlign: 'right' }}>
            {showTitle ? <h1>{title}</h1> : null }
            {date ? <p>{date}</p> : null }
          </div>
          <div className={style} dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Title>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query Blog($slug: String!) {
    ...Post
  }
`
