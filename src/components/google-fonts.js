import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleFonts = ({ fonts }) => {
  const href = `https://fonts.googleapis.com/css2?family=${fonts.join(
    '&family='
  )}&display=swap`
  return (
    <Helmet>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="true"
      />
      <link href={href} rel="stylesheet" />
    </Helmet>
  )
}

export default GoogleFonts
