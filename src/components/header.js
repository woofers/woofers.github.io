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
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    }
  ]
}

const headerStyle = css(`
  margin: 0px auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`)

const containerStyle = css(`
  display: flex;
  padding-top: 1.5em;
  margin-bottom: 2em;
  background-color: #f27052;
`)

const linkStyle = css(`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.5em;
`)

const hStyle = css(`
  text-decoration: none;
`)

const Header = p => (
  <div className={containerStyle}>
    <div className={headerStyle}>
      <h1 className={hStyle}>
        <Link
          to={p.link}
          className={linkStyle}
        >
        {p.name}
        </Link>
      </h1>
    <Nav links={siteData.navLinks}/>
    </div>
  </div>
)

export default Header
