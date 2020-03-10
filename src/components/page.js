import React from 'react'
import Layout from './layout'
import Footer from './footer'
import Header from './header'
import Button from './button'
import { css } from '@emotion/core'

const container = css`
  margin-top: 30px;
  padding-bottom: 3.5rem;
  a {
    color: #f27052;
    font-weight: 700;
    &:hover {
      color: rgba(242, 112, 82, 0.75);
    }
  }
`

const Page = ({ children }) => (
  <Layout outside={<Footer />} color="#000" background="#fff">
    <Header>
      <Button duration={0.5} to="/">{'<-'} Back</Button>
    </Header>
    <main css={container}>{children}</main>
  </Layout>
)

export default Page
