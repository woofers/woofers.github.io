import React from 'react'
import Header from './splash-header'
import Layout from './layout'
import { withTheme, css } from '@emotion/react'

const style = theme => css`
  *::selection {
    background: ${theme.colors.selection.home} !important;
  }
`

const Splash = ({ children, theme }) => {
  return (
    <Layout color={theme.colors.text.light}
      background={theme.colors.accentGradient}
    >
      <div css={style}>
        <Header>
          <main>{children}</main>
        </Header>
      </div>
    </Layout>
  )
}

export default withTheme(Splash)
