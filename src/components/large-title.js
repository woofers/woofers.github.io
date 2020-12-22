import React from 'react'
import { css } from '@emotion/react'

const header = theme => css`
  color: ${theme.colors.text.dark};
  text-align: center;
  font-size: 50px;
  margin-bottom: 60px;
  margin-top: 20px;
`

const LargeTitle = p => {
  const { children, ...rest } = p
  return (
    <h1 css={header} {...rest}>
      {children}
    </h1>
  )
}

export default LargeTitle
