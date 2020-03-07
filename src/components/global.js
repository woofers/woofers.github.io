import React from 'react'
import { css, Global as Styles } from '@emotion/core'

const style = css`
  html {
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper,
  .tl-edges,
  .tl-wrapper {
    height: 100%;
  }

  body {
    background: #f27052;
    color: #fff;
    transition: color, background 0.5s ease-in-out;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.5s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  h4 {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    font-size: 1.1rem;
  }

  ::selection {
    background: rgba(228, 225, 53, 0.5);
    color: #06324c;
  }
`

const Global = p => (
  <Styles styles={style} />
)

export default Global
