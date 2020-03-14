import React from 'react'
import Global from './global'
import Container from './container'
import { css } from '@emotion/core'

const Layout = ({ children, outside, color, background }) => {
  const style = css`
    position: relative;
    min-height: 100vh;
    background: ${background};
    color: ${color};
  `
  return (
    <div css={style}>
      <Global />
      <Container>
        {children}
      </Container>
      {outside}
    </div>
  )
}

export default Layout
