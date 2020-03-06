import React from 'react'
import { css, Global as Styles } from '@emotion/core'

const style = css`
  body {
    background: #f27052;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      opacity: 0.5;
    }
  }
`

const Global = p => (
  <Styles styles={style} />
)

export default Global
