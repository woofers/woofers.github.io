import React from 'react'
import { css } from '@emotion/react'

const style = theme => css`
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: ${theme.breakpoints.nav.breakpoint}) {
    display: flex;
  }
`

const Header = ({ children }) => (
  <header css={style}>
    {children}
  </header>
)

export default Header
