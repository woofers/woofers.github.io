import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { css, Global } from '@emotion/core'
import Switch from '../components/switch'
import Header from '../components/header'
import Footer from '../components/footer'
import { Social } from '../components/social'
import light from '../themes/light'
import dark from '../themes/dark'
import { Nav } from '../components/nav'
import { style as buttonStyle } from '../components/button'
import 'prism-themes/themes/prism-duotone-space.css'
import { icons, style as iconsStyle } from '../utils/icons'
import { ThemeProvider, withTheme } from 'emotion-theming'
import { faGithub,
         faLinkedinIn as faLinkedin,
         faStackOverflow,
         faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


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

  img {
    border-radius: 20px;
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
const name = "Jaxson Van Doorn"
const home = "/"
const siteData = {
  navLinks: [
    {
      name: 'Projects',
      link: '/projects/'
    },
    {
      name: 'Blog',
      link: '/blog/'
    },
    {
      name: 'About',
      link: '/about/'
    }
  ]
}

const social = [
  {
    link: '//github.com/woofers',
    name: 'GitHub',
    icon: faGithub,
  },
  {
    link: '//stackoverflow.com/users/9129020/jvandoorn',
    name: 'Stack Overflow',
    icon: faStackOverflow,
  },
  {
    link: '//twitter.com/jaxsonvandoorn',
    name: 'Twitter',
    icon: faTwitter,
  },
  {
    link: '//www.linkedin.com/in/jaxson-van-doorn/',
    name: 'LinkedIn',
    icon: faLinkedin,
  },
  {
    link: 'mailto:jaxson.vandoorn@gmail.com',
    name: 'Email',
    icon: faEnvelope,
  }
]



const Site = withTheme(p => {
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
        title={name}
        htmlAttributes={{ lang: 'en' }}
        meta={[
            { name: 'keywords', content: 'gatsbyjs, org-mode, jaxson' },
        ]}>
        <link rel="icon" sizes="192x192" href="/favicon-192.png"/>
      </Helmet>
      <Header name={name} link={home}>
        <Nav links={siteData.navLinks}>
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
          <Social socialEntries={social} />
        </Footer>
      </div>
    </div>
  )
})

class Template extends Component {
  constructor(props) {
    super(props)
    this.state = { theme: dark }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    this.setState({ theme: this.state.theme.name === 'dark' ? light : dark })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Site children={this.props.children}
              toggleTheme={this.toggleTheme} />
      </ThemeProvider>
    )
  }
}

icons.watch()

export default Template

export const contentFragment = graphql`
  fragment Content on OrgContent {
    html
    meta {
      title
      date
      slug
      icon
      type
      icon_mode
      game
      landscape
      profile_alt
      profile
    }
    fields {
      slug
      path
    }
  }
`

export const titleFragment = graphql`
  fragment Title on Query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
