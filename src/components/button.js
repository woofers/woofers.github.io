import React from 'react'
import { css } from '@emotion/react'
import { FadeLink as Link } from './link'

const radius = `
  display: inline-block;
  border-radius: 4px;
`

const style = theme => css`
  > div {
    ${radius}
    background: ${theme.colors.accentGradient};
    > div {
      ${radius}
      background: ${theme.colors.background};
      height: 100%;
      font-weight: 700;
      padding: 6px 12px;
      color: ${theme.colors.accent};
      font-size: 14px;
      border: 1px solid ${theme.colors.accent};
      transition: background 0.7s cubic-bezier(0.04, 0.9, 0.48, 1.15) 0s;
      &:hover {
        background: rgba(0, 0, 0, 0);
        color: ${theme.colors.text.light};
        border: none;
        padding: 7px 13px;
      }
    }

  }
`

const Button = ({ children, ...rest }) => (
  <Link {...rest} direction="left" duration={0.4} css={style}>
    <div>
      <div>
        {children}
      </div>
    </div>
  </Link>
)

export default Button
