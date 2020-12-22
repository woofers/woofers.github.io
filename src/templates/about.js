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
import { css } from '@emotion/react'
import Title from '../components/large-title'
import { camelCaseToPascalCase as uppercase } from '../utils/case'

const style = theme => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div:first-of-type {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    bottom: 23px;
  }
  text-align: right;
  @media (min-width: ${theme.breakpoints.mobile.breakpoint}) {
    padding-left: 10px;
    text-align: center;
  }
`

const flex = theme => css`
  @media (min-width: ${theme.breakpoints.mobile.breakpoint}) {
    display: flex;
    > h1 {
      flex-grow: 2;
      flex-shrink: 1;
      flex-basis: auto;
    }
  }
`

const AboutTemplate = p => {
  const { data } = p
  const { orgContent, site } = data
  const { html, metadata } = orgContent
  const { title, type } = metadata
  const { siteMetadata } = site
  const { resume, social } = siteMetadata
  const { twitter, github } = social
  return (
    <Page>
      <SEO title={uppercase(type)} />
      <div css={flex}>
        <Title>{title}</Title>
        <div css={style}>
          <div>
            <Avatar size="130px" fallback="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+O7tfwAJcQPNEnkugQAAAABJRU5ErkJggg==" />
          </div>
          <div>
            <Link to={twitter.link} inline={false} icon={FaTwitter}>{twitter.handle}</Link>
            <Link to={github.link} inline={false} icon={FaGithub}>{github.name}</Link>
            <Link to={resume} inline={false} icon={FaScroll}>Resume</Link>
          </div>
        </div>
      </div>
      <Content html={html} />
    </Page>
  )
}

export default AboutTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    ...Social
    ...Resume
    orgContent(slug: {eq: $slug}) {
      ...Content
    }
  }
`
