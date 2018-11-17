import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { css, injectGlobal } from 'emotion'
import Header from '../components/header'
import Footer from '../components/footer'
import 'prism-themes/themes/prism-duotone-space.css'
import { animations,
         colours, fonts,
         margins, transitions,
         selections, contentWidth } from '../components/globals'

injectGlobal(`
  html {
    position: relative;
    min-height: 100%;
    overflow-y: auto;
  }

  body {
    background-color: ${colours.background};
  }

  img::selection {
    background: ${selections.image} !important;
  }

  img::-moz-selection {
    background: ${selections.image} !important;
  }

  ::selection {
    background: ${selections.main} !important;
    color: ${selections.link};
  }

  ::-moz-selection {
    background: ${selections.main} !important;
    color: ${selections.link};
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: ${colours.codeBackground} !important;
    font-size: ${fonts.code}em !important;
  }
`)

const style = css(`
  .footnote::before {
    content: "[" attr(data-label) "]";
    display: inline-block;
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
  }

  a {
    color: ${colours.link};
    border-bottom: ${margins.line} solid transparent;
    transition: ${transitions.hover}
  }

  a:hover {
    padding-bottom: ${animations.link};
    border-color: currentColor;
  }

  a:focus, a:hover, a:visited, a:link, a:active {
    text-decoration: none;
  }

  blockquote {
    border-color: ${colours.link};
  }

  td {
    border-color: ${colours.table};
  }

  figure, table, img, iframe {
    margin-bottom: 0;
    border-width: 0;
  }

  img {
    border-radius: 20px;
  }

  figure {
    text-align: center;
  }

  pre {
    background: ${colours.codeBackground};
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
      <link rel="icon" sizes="192x192" href="/favicon-192.png"/>
    </Helmet>
    <Header name={name} link={home}/>
    <div className={style}>
      <main className={divStyle}>
        {children()}
      </main>
      <Footer/>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const contentFragment = graphql`
  fragment Content on Orga {
    html
    meta
    fields {
      slug
    }
  }
`

export const titleFragment = graphql`
  fragment Title on RootQueryType {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const postFragment = graphql`
  fragment Post on RootQueryType {
    ...Title
    orga(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
