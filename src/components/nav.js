import React from 'react'
import { css } from '@emotion/core'

const style = css`
  display: flex;
  a {
    padding: 10px 20px;
    font-size: 17px;
    font-weight: 700;
  }
`

const links = [
  'About',
  'Projects',
  'Blog'
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
