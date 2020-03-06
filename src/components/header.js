import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import Avatar from './avatar'
import { css } from '@emotion/core'

const style = css`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    > div:first-of-type {
      margin-right: 10px;
    }
  }
`

const text = css`
  max-width: 600px;
`

const Header = ({ title }) => (
  <div>
    <header css={style}>
      <div>
        <Avatar />
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
