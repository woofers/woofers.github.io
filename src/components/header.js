import React from 'react'
import { Link } from 'gatsby'
import { Nav } from './nav'
import { css } from '@emotion/core'
import { colours, fonts, margins, selections } from './globals'
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

const header = css`
  background-color: ${colours.header};
  padding-top: ${margins.small};

  * {
    ::selection {
      background: ${selections.header} !important;
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

const link = css`
  color: ${colours.text};
  font-size: ${fonts.header}em;
  border: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const wave = css`
  margin-top: -20px;
  height: 145px;
  width: 100%;
  position: absolute;
  background: ${colours.header};
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
