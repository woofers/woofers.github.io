import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { css, injectGlobal } from 'emotion'
import Header from '../components/header'
import Footer from '../components/footer'
import 'prism-themes/themes/prism-duotone-space.css'
import { colours, fonts,
         margins, transitions,
         selections, contentWidth } from '../components/globals'

injectGlobal(`
  html {
    position: relative;
    min-height: 100%;
    overflow-y: auto;
  }

  .footnote::before {
    content: "[" attr(data-label) "]";
    display: inline-block;
  }

  body {
    background-color: ${colours.background};
  }

  blockquote, div, p {
    color: ${colours.text};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${margins.extraSmall} 0;
    color: ${colours.text};
  }

  h2 {
    font-size: ${fonts.large}em;
    margin: 0;
  }

  a {
    color: ${colours.link};
    transition: ${transitions.hover};
  }

  blockquote {
    border-color: ${colours.link};
  }

  td {
    border-color: ${colours.table};
  }

  img {
    border-radius: 10px;
    margin: 0;
  }

  figure {
    text-align: center;
  }

  a::selection {
    color: ${selections.link};
  }

  a::-moz-selection {
    color: ${selections.link};
  }

  img::selection {
    background: ${selections.image} !important;
  }

  img::-moz-selection {
    background: ${selections.image} !important;
  }

  ::selection {
    background: ${selections.main} !important;
  }

  ::-moz-selection {
    background: ${selections.main} !important;
  }

  pre {
      background: ${colours.codeBackground};
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: ${colours.codeBackground} !important;
  }
`)

const name = "Jaxson Van Doorn"
const home = "/"
const divStyle = css(`
  margin: ${margins.large} auto ${margins.large};
  max-width: ${contentWidth};
  padding: 0 ${margins.small} ${margins.medium};
`)

const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet
      title={name}
      meta={[
        { name: 'keywords', content: 'gatsbyjs, org-mode, jaxson' },
        { name: 'theme-color', content: colours.header },
      ]}>
      <link rel="icon" sizes="192x192" href="favicon-192.png"/>
    </Helmet>
    <Header name={name} link={home}/>
    <main className={divStyle}>
      {children()}
    </main>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
