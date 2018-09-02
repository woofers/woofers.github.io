import React from 'react'
import { css } from 'emotion'
import Link from 'gatsby-link'
import { margins } from './globals'

const navStyle = css(`
  display: flex;
  align-items: center;
  margin: 0 0 ${margins.md}px 0;
`)

export const Nav = p => {
  const linkStyle = css(`
    font-size: 1.5em;
    padding: 0 ${margins.md}px ${margins.md}px ${margins.md}px;
    &:not(:last-child) {
      margin: 0 ${margins.sm}px 0 0
    }
    text-decoration: none;
    border: ${p.hoverBorder};
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
