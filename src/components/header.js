import { Link } from 'gatsby'
import React from 'react'
import { css } from '@emotion/core'

const style = css`
  background: #000;
`

const Header = ({ title }) => (
  <header css={style}>
      <h1>
        <Link to="/">
          {title}
        </Link>
      </h1>
  </header>
)

Header.defaultProps = {
  title: ''
}

export default Header
