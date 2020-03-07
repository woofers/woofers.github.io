import React from 'react'
import { css } from '@emotion/core'

const style = css`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Header = ({ children }) => (
  <header css={style}>
    {children}
  </header>
)

export default Header
