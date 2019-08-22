import React from 'react'
import Helmet from 'react-helmet'

const size = 300
const url = 'https://opengraph.vandoorn.ca'
const image = `${url}/jvd.png`

const OgImage = p => {
  const api = `${url}/**${p.title}**.png?&md=1&images=${image}&widths=${size}&heights=${size}`
  return (
    <Helmet>
      <meta property="og:image" content={api} />
    </Helmet>
  )
}

export default OgImage
