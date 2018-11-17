import React from 'react'
import Helmet from 'react-helmet'

const makeTitle = (title, site) => {
  if (!title) return site
  return `${title} - ${site}`
}

export const Title = p => (
  <div>
    <Helmet>
      <meta property="og:title" content={p.title} />
      <title>{makeTitle(p.title, p.site)}</title>
    </Helmet>
    {p.children}
  </div>
)
