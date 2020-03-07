import React from 'react'
import Layout from './layout'
import Footer from './footer'

const Page = ({ children }) => (
  <Layout outside={<Footer />}>
    <main>{children}</main>
  </Layout>
)

export default Page
