import { Link } from 'gatsby'
import React from 'react'
import Nav from './nav'
import { css } from '@emotion/core'

const style = css`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
  }
`

const text = css`
  max-width: 600px;
`

const Header = ({ title }) => (
  <div>
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
    <p css={text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla lacus, aliquam in justo et, accumsan consequat neque.
    </p>
  </div>
)

Header.defaultProps = {
  title: ''
}

export default Header
