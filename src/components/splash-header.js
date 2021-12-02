import React from 'react'
import Nav from './nav'
import Tagline from './tagline'
import Avatar from './avatar'
import { css } from '@emotion/react'
import Header from './header'
import Social from './social'
import { Markdown } from './markdown'
import { useStaticQuery, graphql } from 'gatsby'

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
  > div:first-of-type {
    max-width: 600px;
  }
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

const footer = theme => css`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  @media (min-width: ${theme.breakpoints.mobile.breakpoint}) {
    justify-content: flex-start;
  }

`

const SplashHeader = ({ children }) => {
  const data = useStaticQuery(graphql`{ ...Title }`)
  const { title, tagline } = data.site.siteMetadata
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
              <div css={wordWrap}>
                <div>{first}</div>
                { last && <div>{' '}{last}</div> }
              </div>
            </h1>
            <Tagline />
          </div>
        </div>
        <Nav />
      </Header>
      <div css={container}>
        {children}
      </div>
    </div>
  )
}

SplashHeader.defaultProps = {
  title: ''
}

export default SplashHeader
