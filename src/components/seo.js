/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const openGraphImage = title => {
  const size = 300
  const url = 'https://opengraph.vandoorn.ca'
  const image = `${url}/jvd.png`
  return `${url}/**${title}**.png?&md=1&images=${image}&widths=${size}&heights=${size}`
}

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(graphql`{ ...Meta }`)
  const { siteMetadata } = site
  const metaDescription = description || siteMetadata.description
  const tab = title || siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={tab}
      titleTemplate={tab !== siteMetadata.title ? `%s | ${siteMetadata.title}` : `%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: tab,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: openGraphImage(tab),
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: tab,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="icon" href="/favicon.png" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: ''
}

export default SEO
