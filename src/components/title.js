import React from 'react'
import DocumentTitle from 'react-document-title'

const makeTitle = (title, site) => {
  if (!title) return site
  return `${title} - ${site}`
}

export const Title = p => (
  <DocumentTitle title={makeTitle(p.title, p.site)}>
    {p.children}
  </DocumentTitle>
)
