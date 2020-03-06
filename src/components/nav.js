import { Link } from 'gatsby'
import React from 'react'
import { css } from '@emotion/core'

const style = css`
  display: flex;
  a {
    padding: 10px;
    font-size: 20px;
  }
`

const links = [
  'About',
  'Blog',
  'Projects'
]

const Nav = p => (
  <nav css={style}>
    {
      links.map(link =>
        <a href="#" key={link}>{link}</a>
      )
    }
  </nav>
)

Nav.defaultProps = {
  title: ''
}

export default Nav
