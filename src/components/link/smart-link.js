import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TransitionLink from 'gatsby-plugin-transition-link'
import { css } from '@emotion/react'

const removeLine = css`
  box-shadow: none;
  &:after {
    content: none;
  }
`

/*
  Since DOM elements tags cannot receive activeClassName
  and partiallyActive, destructure the prop here and
  pass it only to GatsbyLink
  Adapted from: https://www.gatsbyjs.org/docs/gatsby-link/
*/
const Link = p => {
  const {
    children, to, activeClassName, partiallyActive,
    exit, entry,
    underline,
    ...rest
  } = p
  const style = !underline ? removeLine : ''
  const data = useStaticQuery(graphql`{ ...Url, ...Pages }`)
  let link = to

  // Use relative links for jaxson.vandoorn.ca for local development
  const { siteUrl } = data.site.siteMetadata
  const paths = data.allSitePage.nodes.map(node => node.path)
  const urlNoHttps = siteUrl.replace('https://', '')
  const urlHttp = siteUrl.replace('https://', 'http://')

  link = to.replace(siteUrl, '').replace(urlHttp, '').replace(urlNoHttps, '')
  if (!link) link = '/'

  if (!paths.includes(link)) {
    return (
      <OutboundLink href={to} {...rest} css={style}>
        {children}
      </OutboundLink>
    )
  }

  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(link)

  // Use Gatsby Link for internal links, and tags for others
  if (internal) {
    return (
      <TransitionLink
        to={link}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        exit={exit}
        entry={entry}
        {...rest}
        css={style}
      >
        {children}
      </TransitionLink>
    )
  }
  return (
    <a href={link} {...rest} css={style}>
      {children}
    </a>
  )
}

export default Link
