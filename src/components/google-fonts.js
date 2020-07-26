import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleFonts = ({ fonts }) => {
  const href = `https://fonts.googleapis.com/css?family=${fonts.join('|')}&display=swap`
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link rel="preload" href={href} as="style" onload="this.onload=null;this.rel='stylesheet'" media="all" />
      <noscript>{`<link rel="stylesheet" href="${href}" media="all" />`}</noscript>
    </Helmet>
  )
}

export default GoogleFonts
