import React from 'react'
import { css } from 'emotion'
import { Link } from 'gatsby'
import { colours, fonts, margins, transitions } from './globals'

const navStyle = css(`
  display: flex;
  align-items: center;
  margin: 0 0 ${margins.md}px 0;
`)

export const Nav = p => {
  const linkStyle = css(`
    font-size: ${fonts.nav}em;
    color: ${colours.text};
    padding: ${margins.md}px;
    &:not(:last-child) {
      margin: 0 ${margins.sm}px 0 0
    }
    text-decoration: none;
    border-bottom: 1.5px double;
    transition: ${transitions.hover};
    border-color: rgba(0, 0, 0, 0);
    &:hover {
      border-color: initial;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  `)
  return (
    <nav className={navStyle}>
      {p.links
        ? p.links.map(({ name, link }) => (
            <Link
              className={linkStyle}
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
