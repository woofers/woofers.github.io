import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
    @media only screen and (min-width: 545px) {
      margin: 0 ${theme.margins.items} 0 0
    }
    margin: 0 ${theme.margins.itemsSmall} 0 0
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

export const Nav = p => {
  const { nav } = useStaticQuery(graphql`{ ...Nav }`).site.siteMetadata
  return (
    <nav css={navStyle}>
      { Object.keys(nav).map(name => {
          const link = nav[name]
          return (
            <Link
              css={linkStyle}
              to={link}
              key={link}
              activeStyle={{ borderColor: 'initial' }}
            >
              {name}
            </Link>
          )
        })
      }
      <span>{p.children}</span>
    </nav>
  )
}
