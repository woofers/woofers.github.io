import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const navStyle = theme => css`
  display: flex;
  align-items: center;
  margin: 0 0 ${theme.margins.nav.overhang} 0;
`

const linkStyle = theme => css`
  font-size: ${theme.fonts.nav};
  color: ${theme.colors.headerText};
  padding: ${theme.margins.nav.buttonSize};
  &:not(:last-child) {
    margin: 0 ${theme.margins.items} 0 0
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

const space = theme => css`
  margin-left: ${theme.margins.small};
`

export const Nav = p => {
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
        <span css={space}>
          {p.children}
        </span>
    </nav>
  )
}
