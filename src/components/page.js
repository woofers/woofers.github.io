import React from 'react'
import Layout from './layout'
import Footer from './footer'
import Header from './header'
import { css, Global } from '@emotion/core'

const style = css`
  body {
    background: #fff;
    color: #000;
  }
`

const container = css`
  margin-top: 50px;
`

const Page = ({ children }) => (
  <Layout outside={<Footer />}>
    <Global styles={style} />
    <Header>
      <button>Go back ... </button>
    </Header>
    <main>{children}</main>
  </Layout>
)

export default Page
