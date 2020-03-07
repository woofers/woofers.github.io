import React from 'react'
import { css } from '@emotion/core'
import { FadeLink as Link } from './link'

const style = css`
  font-weight: 700;
  padding: 6px 12px;
  color: #f27052;
  font-size: 14px;
  border: 1px solid #f27052;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  &:hover {
    color: #fff;
    background: #f27052;
  }
`

const Button = ({ children, ...rest }) => (
  <Link {...rest} direction="right" css={style}>
    {children}
  </Link>
)

export default Button
