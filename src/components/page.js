import React from 'react'
import Layout from './layout'

const Page = ({ children, ...rest }) => (
  <div {...rest}>
    {children}
  </div>
)

export default Page
