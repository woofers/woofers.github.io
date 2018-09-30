import React from 'react'
import Link from 'gatsby-link'
import { Nav } from './nav'
import { css } from 'emotion'
import { colours, fonts, margins } from './globals'

const siteData = {
  navLinks: [
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'Blog',
      link: '/blog'
    },
    {
      name: 'About',
      link: '/about'
    }
  ]
}

const containerStyle = css(`
  background-color: ${colours.header};
  padding-top: ${margins.small};
`)

const headerStyle = css(`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 ${margins.large};
`)

const linkStyle = css(`
  color: ${colours.text};
  font-size: ${fonts.header}em;
  border: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`)

const Header = p => (
  <header role='banner' className={containerStyle}>
    <div className={headerStyle}>
      <div style={{marginTop: margins.small}}>
        <h1 role='button'>
          <Link
            to={p.link}
            className={linkStyle}
          >
          {p.name}
          </Link>
        </h1>
      </div>
      <Nav links={siteData.navLinks}/>
    </div>
  </header>
)

export default Header
