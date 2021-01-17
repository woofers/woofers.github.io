import React from 'react'
import Page from '../components/page'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import cheerio from 'cheerio'
import { FadeLink as Link } from '../components/link'
import Content from '../components/content'
import { css } from '@emotion/react'
import Title from '../components/large-title'
import { normal } from '../styles/text'
import { Bounce, Blink } from 'react-micron'

const space = css`
  margin-bottom: 30px;
  padding: 20px 20px;
`

const read = css`
  margin-bottom: 20px;
`

const Blog = () => {
  const data = useStaticQuery(graphql`
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
  `)
  const formatter = new Intl.DateTimeFormat('en' , { dateStyle: 'long' })
  const { allOrgContent, site } = data
  const { edges } = allOrgContent
  const { siteMetadata } = site
  const { nav } = siteMetadata
  const { blog } = nav
  const getDate = post => post.metadata && post.metadata.date
  const content = edges.map(({ node }) => node)
  const posts = content.filter(post => {
    const path = post.fields.slug
    return path && path.startsWith(blog)
  }).sort((a, b) => {
    const compare = (a, b, f) =>
      (a || b) ? (!a ? 1 : !b ? -1 : f(a, b) ? 1 : -1) : 0
    return compare(getDate(a), getDate(b), (a, b) => new Date(a) < new Date(b))
  }).map(post => {
    const date = new Date(getDate(post))
    post.metadata.date = undefined
    if (!isNaN(date.getTime())) post.metadata.date = date
    return post
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
          const preview = cheerio.load(html)('p:first-child')
          return (
            <div key={`post-preview-${title}`} css={space}>
              <h1>
                <Bounce events="onMouseOver">
                  <Link to={slug}>{title}</Link>
                </Bounce>
              </h1>
                {date && <div css={normal}>{formatter.format(date)}</div> }
              <div css={read}>
                <Content html={preview.html()} />
              </div>
              <Link
                to={slug}
                aria-label={`${continueReading} ${title}`}
              >
                <Blink events="onMouseOver">
                  {continueReading} . . .
                </Blink>
              </Link>
            </div>
          )
        })

      }
    </Page>
  )
}

export default Blog
