import React from 'react'
import { Helmet } from 'react-helmet'

const func = 'fl'
const html = 'e'

const script = `
  function ${func}() {
    var ${html} = document.querySelector('html');
    ${html}.style.fontSize = "112.5%";
    ${html}.style.letterSpacing = "normal";
  }
`.split('\n').map(el => el.trim()).join('')


const GoogleFonts = ({ fonts }) => {
  const href = `https://fonts.googleapis.com/css?family=${fonts.join('|')}&display=swap`
  // eslint-disable-next-line no-template-curly-in-string
  const fallback = `<link rel="stylesheet" href="${href}" media="all" />`
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link rel="preload" href={href} as="style" onload={`this.onload=${func};this.rel='stylesheet'`} media="all" />
      <noscript>{fallback}</noscript>
      <script type="text/javascript">{script}</script>
    </Helmet>
  )
}

export default GoogleFonts
