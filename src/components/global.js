import React from 'react'
import { Global as GlobalStyle, css } from '@emotion/react'

const style = css`
  html, h1, h2, h3, h4, h5, h6, a, p {
    font-family: 'Cabin', sans-serif;
  }
`


const Global = () => <GlobalStyle styles={style} />

export default Global
