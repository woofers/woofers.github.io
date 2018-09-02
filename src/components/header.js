import React from 'react'
import Link from 'gatsby-link'
import style from './header.css'
import { Nav } from './nav'

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

const Header = p => (
  <div className={style.container}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1.5em',
          }}
        >
        {p.name}
        </Link>
      </h1>
    <Nav links={siteData.navLinks} />
    </div>
  </div>
)

export default Header
