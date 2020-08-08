import React from 'react'
import Page from '../components/page'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import cheerio from 'cheerio'
import { FadeLink as Link } from '../components/link'
import Content from '../components/content'
import { css } from '@emotion/core'
import Title from '../components/large-title'
import { normal } from '../styles/text'

const space = css`
  margin-bottom: 30px;
  padding: 20px 20px;
`

const read = css`
  margin-bottom: 20px;
`

const Blog = p => {
  const { data } = p
  const { allOrgContent, site } = data
  const { edges } = allOrgContent
  const { siteMetadata } = site
  const { nav } = siteMetadata
  const { blog } = nav
  const content = edges.map(({ node }) => node)
  const posts = content.filter(post => {
    const path = post.fields.slug
    return path && path.startsWith(blog)
  }).sort((a, b) => {
    const date = post => post.metadata && post.metadata.date
    const compare = (a, b, f) =>
      (a || b) ? (!a ? 1 : !b ? -1 : f(a, b) ? 1 : -1) : 0
    return compare(date(a), date(b), (a, b) => new Date(a) < new Date(b))
  })
  return (
    <Page>
      <SEO title="Blog" />
      <Title>Posts</Title>
      {
        posts.map(post => {
          const continueReading = 'Continue reading'
          const { metadata, fields, html } = post
          const { slug } = fields
          const { date, title } = metadata
          const preview = cheerio.load(html)('p', 'body')
          preview.find('h1').remove()
          return (
            <div key={`post-preview-${title}`} css={space}>
              <h1>
                <Link to={slug}>{title}</Link>
              </h1>
              {date && <div css={normal}>{date}</div> }
              <div css={read}>
                <Content html={preview.html()} />
              </div>
              <Link
                to={slug}
                aria-label={`${continueReading} ${title}`}
                underline
              >
                  {continueReading} . . .
              </Link>
            </div>
          )
        })

      }
    </Page>
  )
}

export default Blog


export const pageQuery = graphql`
  {
    ...Title
    ...Nav
    allOrgContent {
      edges {
        node {
          ...Content
        }
      }
    }
  }
`
