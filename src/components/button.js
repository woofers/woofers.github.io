import React from 'react'
import { css } from 'emotion'
import { transitions, fonts, colours, margins } from '../components/globals'

const slant = '30px'
const topRight = '11px'
const bottomLeft = '12px'

const style = css(`
  font-weight: bold;
  font-size: ${fonts.button}em;
  display: inline-block;
  padding: ${margins.normal};
  margin: ${margins.extraSmall};
  border: 1px solid ${colours.link};
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
`)

const Button = p => (
  <h2 style={{ display: 'inline-block' }}>
    <a href={p.href} className={style}>{p.children}</a>
  </h2>
)

export default Button
