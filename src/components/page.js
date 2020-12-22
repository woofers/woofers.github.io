import React from 'react'
import Layout from './layout'
import Footer from './footer'
import Header from './header'
import Back from './back-button'
import { css } from '@emotion/react'
import { withTheme } from '@emotion/react'

const container = theme => css`
  margin-top: 30px;
  padding-bottom: 3.5rem;
  a {
    color: ${theme.colors.link.normal.normal};
    font-weight: 700;
    &:hover {
      color: ${theme.colors.link.normal.hover};
    }
  }
`

const Page = ({ children, theme }) => (
  <Layout outside={<Footer />}
    color={theme.colors.text.dark}
    background={theme.colors.background}
  >
    <Header>
      <Back />
    </Header>
    <main css={container}>{children}</main>
  </Layout>
)

export default withTheme(Page)
