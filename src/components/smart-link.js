import React from 'react'
import { useStaticQuery, Link as GatsbyLink, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
// Adapted from: https://www.gatsbyjs.org/docs/gatsby-link/
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
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
      <OutboundLink href={to} {...other}>
        {children}
      </OutboundLink>
    )
  }

  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(link)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={link}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={link} {...other}>
      {children}
    </a>
  )
}

export default Link
