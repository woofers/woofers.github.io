import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

const space = 40

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

const SplashHeader = ({ children }) => {
  const data = useStaticQuery(graphql`{ ...Title }`)
  return (
    <div>
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
