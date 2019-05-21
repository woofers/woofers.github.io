import React from 'react'
import { css } from '@emotion/core'
import Link from './smart-link'

const slant = '30px'
const topRight = '11px'
const bottomLeft = '12px'

export const style = theme => css`
  a[role=button] {
    font-weight: bold;
    font-family: 'Raleway',sans-serif;
    display: inline-block;
    padding: ${theme.margins.normal} !important;
    margin: ${theme.margins.extraSmall};
    border: 1px solid ${theme.colors.link} !important;
    color: ${theme.colors.link};
    background: ${theme.colors.button};
    border-radius: ${slant} ${topRight} ${slant} ${bottomLeft};
    transition: ${theme.transitions.hover} !important;
    transition-duration: 0.425s !important;
    &:hover {
      color: ${theme.colors.background};
      background: ${theme.colors.header};
      border-color: rgba(0, 0, 0, 0);
    }
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
    * {
      margin-right: ${theme.margins.superSmall};
    }
  }
`

const Button = p => (
    <span css={style}>
      <Link style={{...p.style}} to={p.href} role='button'>{p.children}</Link>
    </span>
)

export default Button
