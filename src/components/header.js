import React from 'react'
import Link from 'gatsby-link'
import style from './header.css'

const Header = () => (
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
        Jaxson Van Doorn
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
