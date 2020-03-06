import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Global from './global'

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
    <>
      <Header title={data.site.siteMetadata.title} />
      <Global />
      <div>
        <main>{children}</main>
        <footer>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
