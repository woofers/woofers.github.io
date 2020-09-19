import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleFonts = ({ fonts }) => {
  const href = `https://fonts.googleapis.com/css?family=${fonts.join('|')}`
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link href={href} rel="stylesheet" />
    </Helmet>
  )
}

export default GoogleFonts
