import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import cheerio from 'cheerio'
import { colours, fonts, margins } from '../components/globals'
import { Title } from '../components/title'
import { Content } from '../components/content'
import { graphql } from 'gatsby'

const org = css(`
  div {
    margin-bottom: ${margins.small};
  }
`)

class BlogIndex extends React.Component {
  sortedPosts() {
    let posts = this.props.data.allOrgContent.edges
    const date = (node) => node.meta ? node.meta.date : ''
    const safeCompare = (a, b, func) =>
      (a || b) ? (!a ? 1 : !b ? -1 : func(a, b) ? 1 : -1) : 0;
    posts.sort(function(a, b) {
      return safeCompare(date(a.node), date(b.node), (a, b) => new Date(a) < new Date(b));
    });
    return posts
  }

  render() {
    const continueReading = 'Continue reading'
    const _posts = this.sortedPosts().map (({ node }) => {
      const path = node.fields.path
      const meta = node.meta
      const title = meta.title || path
      const include = '/blog/'
      const date = meta.date
      if (!path || !path.startsWith(include)) return
      let preview = cheerio.load(node.html)('p', 'body')
      preview.find('h1').remove()
      return (
        <div style={{ marginBottom: margins.medium }} key={path}>
          <h1 style={{ marginBottom: margins.superSmall }}>
            <Link style={{ lineHeight: fonts.large }} to={node.fields.path}>{title}</Link>
          </h1>
          {date ? <span style={{ fontWeight: 'bold' }}>{date}</span> : null }
          { preview.length ?
            <div>
              <Content html={preview.html()} />
              <Link style={{ color: colours.text }} to={node.fields.path}
                    aria-label={`${continueReading} ${title}`}>
                  {continueReading} . . .
              </Link>
            </div>: null}
        </div>
      )
    })
    const site = this.props.data.site.siteMetadata.title
    return (
      <Title title='Posts' site={site}>
        <div className={org}>
          {_posts}
        </div>
      </Title>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    ...Title
    allOrgContent {
      edges {
        node {
          ...Content
        }
      }
    }
  }
`
