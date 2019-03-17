import React from 'react'
import { css, Global } from '@emotion/core'
import { transitions, colours, margins } from './globals'

const slant = '30px'
const topRight = '11px'
const bottomLeft = '12px'

export const style = css`
  a[role=button] {
    font-weight: bold;
    font-family: 'Raleway',sans-serif;
    display: inline-block;
    padding: ${margins.normal} !important;
    margin: ${margins.extraSmall};
    border: 1px solid ${colours.link} !important;
    color: ${colours.link};
    background: ${colours.rgba.codeBackground(0.15)};
    border-radius: ${slant} ${topRight} ${slant} ${bottomLeft};
    transition: ${transitions.hover} !important;
    transition-duration: 0.425s !important;
    &:hover {
      color: ${colours.background};
      background: ${colours.header};
      border-color: rgba(0, 0, 0, 0);
    }
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  }
`

const Button = p => (
  <span>
    <Global styles={style} />
    <a style={{...p.style}} href={p.href} role='button'>{p.children}</a>
  </span>
)

export default Button
