import React from 'react'
import { injectGlobal } from 'emotion'
import { transitions, fonts, colours, margins } from './globals'

const slant = '30px'
const topRight = '11px'
const bottomLeft = '12px'

injectGlobal(`
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
    transition: ${transitions.hover};
    transition-duration: 0.425s;
    &:hover {
      color: ${colours.background};
      background: ${colours.header};
      border-color: rgba(0, 0, 0, 0);
    }
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  }
`)

const Button = p => (
  <a href={p.href} role='button'>{p.children}</a>
)

export default Button
