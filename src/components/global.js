import React from 'react'
import { Global as GlobalStyle, css } from '@emotion/react'

const style = css`
  html,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    font-family: 'Cabin', sans-serif;
  }

  ::selection {
    background: rgba(0, 40, 255, 0.3) !important;
    color: #314cf0 !important;
  }
`

const Global = () => <GlobalStyle styles={style} />

export default Global

export const createGlobal = val => {
  const style = css(val)
  return () => <GlobalStyle styles={style} />
}
