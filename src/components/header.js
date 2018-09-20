import React from 'react'
import Link from 'gatsby-link'
import { Nav } from './nav'
import { css } from 'emotion'

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
  background-color: #f27052;
  padding-top: 1.25em;
`)

const headerStyle = css(`
  display: flex;
  margin: 0em 12em;
  justify-content: space-between;
`)

const linkStyle = css(`
  color: #FFFFFF;
  font-size: 1.5em;
  border: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`)

const Header = p => (
  <header role='banner' className={containerStyle}>
    <div className={headerStyle}>
      <h1>
        <Link
          to={p.link}
          className={linkStyle}
        >
        {p.name}
        </Link>
      </h1>
      <Nav links={siteData.navLinks}/>
    </div>
  </header>
)

export default Header
