import React from 'react'
import Header from './splash-header'
import Layout from './layout'
import { css } from '@emotion/core'
import { withTheme } from 'emotion-theming'

const style = theme => css`
  h4 {
    color: #fbd4cb;
  }
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
