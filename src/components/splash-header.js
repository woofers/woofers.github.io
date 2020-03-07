import React from 'react'
import { FadeLink as Link } from './link'
import Nav from './nav'
import Avatar from './avatar'
import { css } from '@emotion/core'
import Header from './header'

const space = 40

const home = css`
  margin-top: 10px;
  margin-left: ${space}px;
  align-self: center;
  h1 {
    margin-bottom: 0;
  }
`

const container = css`
  margin: 0 ${space + 90}px;
`

const text = css`
  max-width: 600px;
`

const left = css`
  display: flex;
  flex: 1 1 auto;
`

const SplashHeader = ({ title, children }) => (
  <div>
    <Header>
      <div css={left}>
        <Avatar />
        <div css={home}>
          <h1>
            <Link to="/">
              {title}
            </Link>
          </h1>
          <h4>I build things <span role="img" aria-label="wrench">🔧</span></h4>
        </div>
      </div>
      <Nav />
    </Header>
    <div css={container}>
      <p css={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla lacus, aliquam in justo et, accumsan consequat neque.
      </p>
      {children}
    </div>
  </div>
)

SplashHeader.defaultProps = {
  title: ''
}

export default SplashHeader
