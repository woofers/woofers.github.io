import React from 'react'
import { FadeLink as Link } from './link'
import Nav from './nav'
import Tagline from './tagline'
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

const container = theme => css`
  margin-left: 0;
  margin-top: 15px;
  @media (min-width: ${theme.breakpoints.mobile.breakpoint}) {
    margin-left: ${space + 90}px;
    margin-top: 0;
  }
`

const text = css`
  max-width: 600px;
`

const left = css`
  display: flex;
  flex: 1 1 auto;
`

const wordWrap = css`
  display: flex;
  flex-wrap: wrap;
  > div {
    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
`

const SplashHeader = ({ title, children }) => {
  const parts = title.split(' ')
  const first = parts[0]
  const last = parts.slice(1, parts.length).join(' ')
  return (
    <div>
      <Header>
        <div css={left}>
          <Avatar />
          <div css={home}>
            <h1>
              <Link to="/">
                <div css={wordWrap}>
                  <div>{first}</div>
                  { last && <div>{last}</div> }
                 </div>
              </Link>
            </h1>
            <Tagline />
          </div>
        </div>
        <Nav />
      </Header>
      <div css={container}>
        <p css={text}>
         I create software in <strong>Victoria, BC</strong>.
        </p>
        {children}
      </div>
    </div>
  )
}

SplashHeader.defaultProps = {
  title: ''
}

export default SplashHeader
