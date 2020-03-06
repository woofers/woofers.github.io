import { Link } from 'gatsby'
import React from 'react'
import Nav from './nav'
import { css } from '@emotion/core'

const style = css`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
  }
`

const Header = ({ title }) => (
  <header css={style}>
    <div>
      <h1>
        <Link to="/">
          {title}
        </Link>
      </h1>
      <h4>Some tagline</h4>
    </div>
    <Nav />
  </header>
)

Header.defaultProps = {
  title: ''
}

export default Header
