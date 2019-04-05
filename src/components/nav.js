import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { fonts, margins } from './globals'

const navStyle = css`
  display: flex;
  align-items: center;
  margin: 0 0 ${margins.md}px 0;
`

export const Nav = p => {
  const linkStyle = theme => css`
    font-size: ${fonts.nav}em;
    color: ${theme.colors.headerText};
    padding: ${margins.md}px;
    &:not(:last-child) {
      margin: 0 ${margins.sm}px 0 0
    }
    text-decoration: none;
    border-bottom: 1.5px double;
    transition: border-bottom ${theme.transitions.hover};
    border-color: rgba(0, 0, 0, 0);
    &:hover {
      border-color: initial;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  `
  return (
    <nav css={navStyle}>
      {p.links
        ? p.links.map(({ name, link }) => (
            <Link
              css={linkStyle}
              to={link}
              key={link}
              activeStyle={{ borderColor: 'initial' }}
            >
              {name}
            </Link>
          ))
        : null}
    </nav>
  )
}
