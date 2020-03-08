import React from 'react'
import Global from './global'
import { ThemeProvider } from 'emotion-theming'
import theme from '../themes'
import Container from './container'
import { css } from '@emotion/core'

const Layout = ({ children, outside, color, background }) => {
  const style = css`
    position: relative;
    min-height: 100%;
    background: ${background};
    color: ${color};
  `
  return (
    <ThemeProvider theme={theme}>
      <div css={style}>
        <Global />
        <Container>
          {children}
        </Container>
        {outside}
      </div>
    </ThemeProvider>
  )
}

export default Layout
