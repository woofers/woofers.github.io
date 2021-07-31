import React from 'react'
import Layout from './layout'

const Page = ({ children, ...rest }) => (
  <Layout {...rest}>
    {children}
  </Layout>
)

export default Page
