import React from 'react'
import { Link } from 'gatsby'
import { Nav } from './nav'
import { css } from 'emotion'
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

const header = css(`
  background-color: ${colours.header};
  padding-top: ${margins.small};
`)

const container = css(`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 ${margins.large};
  z-index: -2;
`)

const link = css(`
  color: ${colours.text};
  font-size: ${fonts.header}em;
  border: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`)

const wave = css(`
  margin-top: -20px;
  height: 145px;
  width: 100%;
  position: absolute;
  background: ${colours.header};
  z-index: -1;
`)

const Header = p => (
  <header role='banner' className={header}>
    <div className={container}>
      <div style={{marginTop: margins.small}}>
        <h1>
          <Link
            to={p.link}
            className={link}
          >
          {p.name}
          </Link>
        </h1>
      </div>
      <Nav links={siteData.navLinks}/>
    </div>
    <div className={wave}>
      <Wave fill={colours.background}/>
    </div>
  </header>
)

export default Header
