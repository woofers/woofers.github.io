import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { css, Global } from '@emotion/core'
import Switch from '../components/switch'
import Header from '../components/header'
import Footer from '../components/footer'
import { Social } from '../components/social'
import { light, dark } from '../themes'
import { Nav } from '../components/nav'
import { style as buttonStyle } from '../components/button'
import 'prism-themes/themes/prism-duotone-space.css'
import { icons, style as iconsStyle } from '../utils/icons'
import { ThemeProvider, withTheme } from 'emotion-theming'
import config from '../../package.json'


// !important is needed to override the Prism selection
const style = theme => css`
  * img::selection {
    background: ${theme.selections.image} !important;
  }

  * img::-moz-selection {
    background: ${theme.selections.image} !important;
  }

  * ::selection {
    background: ${theme.selections.main} !important;
    color: ${theme.colors.text};
  }

  * ::-moz-selection {
    background: ${theme.selections.main} !important;
    color: ${theme.colors.text};
  }

  .footnote::before {
    content: "[" attr(data-label) "]";
    display: inline-block;
  }

  blockquote, div, p {
    color: ${theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${theme.margins.extraSmall} 0;
    color: ${theme.colors.text};
  }

  h2 {
    font-size: ${theme.fonts.large};
  }

  a {
    color: ${theme.colors.link};
    border-bottom: ${theme.margins.line} solid transparent;
    transition: ${theme.transitions.hover}
  }

  a:hover {
    padding-bottom: ${theme.animations.link};
    border-color: currentColor;
  }

  a:focus, a:hover, a:visited, a:link, a:active {
    text-decoration: none;
  }

  blockquote {
    border-color: ${theme.colors.link};
  }

  td {
    border-color: ${theme.colors.table};
  }

  figure, table, img, iframe {
    margin-bottom: 0;
    border-width: 0;
  }

  img, canvas {
    border-radius: ${theme.margins.image};
  }

  figure {
    text-align: center;
  }

  pre {
    background: ${theme.colors.codeBackground};
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: ${theme.colors.codeBackground} !important;
    font-size: ${theme.fonts.code} !important;
  }
`

const Site = withTheme(p => {
  const { title, home } = useStaticQuery(graphql`{ ...Template }`).site.siteMetadata
  const divStyle = theme => css`
    margin: ${theme.margins.large} auto ${theme.margins.large};
    max-width: ${theme.contentWidth};
    padding: 0 ${theme.margins.small} ${theme.margins.medium};
  `
  const global = css`
    html {
      position: relative;
      min-height: 100%;
      overflow-y: auto;
    }

    body {
      background-color: ${p.theme.colors.background};
    }
  `
  return (
    <div>
      <Helmet
        title={title}
        htmlAttributes={{ lang: 'en' }}
        meta={[
            { name: 'keywords', content: config.keywords.join(', ') },
        ]}>
      </Helmet>
      <Header name={title} link={home}>
        <Nav>
          <Switch
            checked={p.theme.name === 'dark'}
            onChange={p.toggleTheme}
          />
        </Nav>
      </Header>
      <Global styles={[global, buttonStyle(p.theme), iconsStyle]} />
      <div css={style}>
        <main css={divStyle}>
          {p.children}
        </main>
        <Footer>
          <Social/>
        </Footer>
      </div>
    </div>
  )
})

const Template = ({ children }) => {
  const [theme, setTheme] = useState(dark)
  const toggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <Site children={children}
            toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

icons.watch()

export default Template
