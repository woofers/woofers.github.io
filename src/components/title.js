import React from 'react'
import Helmet from 'react-helmet'
import OgImage from './og-image'

const makeTitle = (title, site) => {
  if (!title) return site
  if (!site) return title
  return `${title} - ${site}`
}

export const Title = p => (
  <div>
    <Helmet>
      <meta property="og:title" content={p.title} />
      <title>{makeTitle(p.title, p.site)}</title>
    </Helmet>
    <OgImage title={p.title} />
    {p.children}
  </div>
)
