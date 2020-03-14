import React from 'react'
import Header from './splash-header'
import Layout from './layout'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { withTheme } from 'emotion-theming'

const style = css`
  h4 {
    color: rgba(255, 255, 255, 0.7);
  }
`

const Splash = ({ children, theme }) => {
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
    <Layout color={theme.colors.text.light}
      background={theme.colors.accent}
    >
      <div css={style}>
        <Header title={data.site.siteMetadata.title}>
          <main>{children}</main>
        </Header>
      </div>
    </Layout>
  )
}

export default withTheme(Splash)
