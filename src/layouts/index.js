import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { css, injectGlobal } from 'emotion'
import Header from '../components/header'
import Footer from '../components/footer'
import 'prism-themes/themes/prism-duotone-space.css'
import { colours, transitions, selections } from '../components/globals'

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

  div {
    margin-bottom: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.75rem 0;
    color: ${colours.text};
  }

  h2 {
    font-size: 1.67em;
    margin-bottom: 0px;
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
    margin-bottom: 0px;
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
  margin: 2rem auto 3.5rem;
  max-width: 1280px;
  padding: 0px 1.0875rem 1.45rem;
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
