import React from 'react'
import { Link } from 'gatsby'
import { Nav } from './nav'
import { css } from '@emotion/core'
import { colours, fonts, margins } from './globals'
import Wave from 'react-wavify'

const siteData = {
  navLinks: [
    {
      name: 'Projects',
      link: '/projects/'
    },
    {
      name: 'Blog',
      link: '/blog/'
    },
    {
      name: 'About',
      link: '/about/'
    }
  ]
}

const header = theme => css`
  background-color: ${theme.colors.header};
  padding-top: ${margins.small};

  * {
    ::selection {
      background: ${theme.selections.header} !important;
    }
  }
`

const container = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 ${margins.large};
  z-index: -2;
`

const link = theme => css`
  color: ${theme.colors.headerText};
  font-size: ${fonts.header}em;
  border: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const wave = theme => css`
  margin-top: -20px;
  height: 145px;
  width: 100%;
  position: absolute;
  background: ${theme.colors.header};
  z-index: -1;
`

const Header = p => (
  <header role='banner' css={header}>
    <div css={container}>
      <div style={{marginTop: margins.small}}>
        <h1>
          <Link
            to={p.link}
            css={link}
          >
          {p.name}
          </Link>
        </h1>
      </div>
      <Nav links={siteData.navLinks}/>
    </div>
    <div css={wave}>
      <Wave fill={colours.background}/>
    </div>
  </header>
)

export default Header
