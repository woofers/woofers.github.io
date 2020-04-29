import React from 'react'
import { css } from '@emotion/core'

const align = css`
  text-align: right;
`

const Title = p => {
  const { children, ...rest } = p
  return (
    <h1 css={align} {...rest}>
      {children}
    </h1>
  )
}

export default Title
