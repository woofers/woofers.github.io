import React from 'react'
import Header from './splash-header'
import Layout from './layout'
import { css } from '@emotion/core'
import { withTheme } from 'emotion-theming'

const style = css`
  h4 {
    color: rgba(255, 255, 255, 0.7);
  }
`

const Splash = ({ children, theme }) => {
  return (
    <Layout color={theme.colors.text.light}
      background={theme.colors.accent}
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
