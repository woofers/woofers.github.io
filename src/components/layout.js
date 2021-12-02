import React from 'react'
import Global from './global'
import Container from './container'
import GoogleFonts from './google-fonts'
import { css } from '@emotion/react'

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
      <GoogleFonts fonts={['Lato:400,700', 'Nunito:300,400,700']} />
      <Container>
        {children}
      </Container>
      {outside}
    </div>
  )
}

export default Layout
