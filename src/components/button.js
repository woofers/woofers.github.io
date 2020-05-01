import React from 'react'
import { css } from '@emotion/core'
import { FadeLink as Link } from './link'

const style = theme => css`
  font-weight: 700;
  padding: 6px 12px;
  color: ${theme.colors.accent};
  font-size: 14px;
  border: 1px solid ${theme.colors.accent};
  border-radius: 4px;
  transition: background 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  &:hover {
    color: ${theme.colors.text.light};
    background: ${theme.colors.accentGradient};
    border: none;
    padding: 7px 13px;
  }
`

const Button = ({ children, ...rest }) => (
  <Link {...rest} direction="left" duration={0.4} css={style}>
    {children}
  </Link>
)

export default Button
