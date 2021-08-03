import React from 'react'

const Page = ({ children, ...rest }) => <div {...rest}>{children}</div>

export default Page
