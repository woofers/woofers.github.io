import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Content from '../components/content'
import Page from '../components/page'
import SEO from '../components/seo'

const style = css`
  a {
    color: #f27052;
    font-weight: 700;
    &:hover {
      color: rgba(242, 112, 82, 0.75);
    }
  }
`

const PostTemplate = p => {
  const { data } = p
  const { orgContent } = data
  const { html, metadata } = orgContent
  const { title } = metadata
  return (
    <Page>
      <SEO title={title} />
      <div css={style}>
        <Content html={html} />
      </div>
    </Page>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        resume
        social {
          github {
            name
            link
          }
          stackoverflow {
            name
            link
          }
          twitter {
            name
            link
            handle
          }
          linkedin {
            name
            link
          }
          email {
            name
            link
          }
        }
      }
    }
    orgContent(fields: {slug: {eq: $slug}}) {
      html
      metadata {
        title
        date
        icon
        type
        icon_mode
        icon_type
        ludum_dare
        placeholder
        game
        landscape
        lang
      }
      fields {
        slug
      }
    }
  }
`
