import React from 'react'
import DocumentTitle from 'react-document-title'
import Helmet from 'react-helmet'

const makeTitle = (title, site) => {
  if (!title) return site
  return `${title} - ${site}`
}

export const Title = p => (
  <div>
    <Helmet>
      <meta property="og:title" content={p.title} />
    </Helmet>
    <DocumentTitle title={makeTitle(p.title, p.site)}>
      {p.children}
    </DocumentTitle>
  </div>
)
