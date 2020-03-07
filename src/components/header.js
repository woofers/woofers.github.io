import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import Avatar from './avatar'
import { css } from '@emotion/core'

const style = css`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    display: flex;
    flex: 1 1 auto;
    > div:first-of-type {
      margin-right: 10px;
    }
  }
`

const home = css`
  margin-left: 10px;
  align-self: center;
  h1 {
    margin-bottom: 0;
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
        <div css={home}>
          <h1>
            <Link to="/">
              {title}
            </Link>
          </h1>
          <h4>I build things 🔧 </h4>
        </div>
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
