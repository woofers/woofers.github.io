import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Global from './global'
import { ThemeProvider } from 'emotion-theming'
import theme from '../themes'
import Container from './container'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        <Header title={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
