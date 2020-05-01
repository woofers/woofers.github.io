import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/content'
import Page from '../components/page'
import SEO from '../components/seo'
import Avatar from '../components/avatar'
import Link from '../components/icon-link'
import { FaGithub,
         FaTwitter,
         FaScroll } from 'react-icons/fa'
import { css } from '@emotion/core'

const style = theme => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div:first-of-type {
    position: relative;
    bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  float: none;
  text-align: right;
  @media (min-width: ${theme.breakpoints.mobile.breakpoint}) {
    padding-left: 10px;
    float: right;
    text-align: left;
  }
`

const AboutTemplate = p => {
  const { data } = p
  const { orgContent, site } = data
  const { html, metadata } = orgContent
  const { title } = metadata
  const { siteMetadata } = site
  const { resume, social } = siteMetadata
  const { twitter, github } = social
  return (
    <Page>
      <SEO title={title} />
      <div css={style}>
        <div>
          <Avatar size="130px" />
        </div>
        <div>
          <Link to={twitter.link} inline={false} icon={FaTwitter}>{twitter.handle}</Link>
          <Link to={github.link} inline={false} icon={FaGithub}>{github.name}</Link>
          <Link to={resume} inline={false} icon={FaScroll}>Resume</Link>
        </div>
      </div>
      <Content html={html} />
    </Page>
  )
}

export default AboutTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    ...Social
    ...Resume
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
