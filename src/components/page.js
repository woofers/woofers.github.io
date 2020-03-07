import React from 'react'
import Layout from './layout'
import Footer from './footer'
import Header from './header'
import Button from './button'
import { css, Global } from '@emotion/core'

const style = css`
  body {
    background: #fff;
    color: #000;
  }
`

const container = css`
  margin-top: 30px;
`

const Page = ({ children }) => (
  <Layout outside={<Footer />}>
    <Global styles={style} />
    <Header>
      <Button duration={0.5} to="/">{'<-'} Back</Button>
    </Header>
    <main css={container}>{children}</main>
  </Layout>
)

export default Page
