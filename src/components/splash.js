import React from 'react'
import Header from './header'
import Layout from './layout'
import { useStaticQuery, graphql } from 'gatsby'

const Splash = ({ children }) => {
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
    <Layout>
      <Header title={data.site.siteMetadata.title}>
        <main>{children}</main>
      </Header>
    </Layout>
  )
}

export default Splash
