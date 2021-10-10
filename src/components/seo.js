import React from 'react'
import Head from 'next/head'

const openGraphImage = title => {
  const size = 300
  const url = 'https://og.jaxs.onl'
  const image = `${url}/jvd.png`
  return `${url}/**${title}**.png?&md=1&images=${image}&widths=${size}&heights=${size}`
}

const name = 'Jaxson Van Doorn'
const siteUrl = 'https://jaxs.onl'
const siteMetadata = {
  title: name,
  siteUrl,
  author: name,
  description: 'Personal blog by Jaxson Van Doorn',
  repo: 'https://github.com/woofers/woofers.github.io',
  social: {
    github: {
      name: 'GitHub',
      link: '//github.com/woofers',
      handle: 'woofers',
    },
    stackoverflow: {
      name: 'Stack Overflow',
      link: '//stackoverflow.com/users/9129020/jvandoorn',
    },
    twitter: {
      name: 'Twitter',
      link: '//twitter.com/jaxsonvandoorn',
      handle: '@jaxsonvandoorn',
    },
    linkedin: {
      name: 'LinkedIn',
      link: '//www.linkedin.com/in/jaxson-van-doorn/',
    },
    email: {
      name: 'Email',
      link: 'mailto:jaxson.vandoorn@gmail.com',
    },
  },
  home: '/',
  resume: `${siteUrl}/resume/jaxsonvd-resume.pdf`,
  nav: {
    blog: '/blog/',
    about: '/about/',
  },
}

const SEO = ({ description, lang, meta, title, noIndex }) => {
  const metaDescription = description || siteMetadata.description
  const tab = title || siteMetadata.title || 'Jaxson Van Doorn'
  const data = [
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
      content: name,
    },
    {
      name: `twitter:title`,
      content: tab,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta)
  return (
    <Head>
      <title>
        {tab !== siteMetadata.title ? `${tab} | ${siteMetadata.title}` : tab}
      </title>
      {data.map(({ name, property, content }) => (
        <link
          key={name ?? property}
          name={name}
          property={property}
          content={content}
        />
      ))}
      <link
        rel="manifest"
        href="/jx-next/manifest.webmanifest"
        crossOrigin="anonymous"
      />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/jx-next/icons/mask-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="48x48"
        href="/jx-next/icons/mask-48x48.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/jx-next/icons/mask-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="96x96"
        href="/jx-next/icons/mask-96x96.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/jx-next/icons/mask-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/jx-next/icons/mask-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/jx-next/icons/mask-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/jx-next/icons/mask-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/jx-next/icons/mask-512x512.png"
      />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Head>
  )
}

SEO.defaultProps = {
  meta: [],
  description: '',
  title: '',
  noIndex: false,
}

export default SEO
