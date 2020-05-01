import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/content'
import Page from '../components/page'
import SEO from '../components/seo'
import Comments from '../components/comments'
import Title from '../components/title'

const PostTemplate = p => {
  const { data } = p
  const { orgContent } = data
  const { html, metadata } = orgContent
  const { title } = metadata
  return (
    <Page>
      <SEO title={title} />
      <Title>{title}</Title>
      <div>
        <Content html={html} />
        <Comments />
      </div>
    </Page>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    ...Social
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
