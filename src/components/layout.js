import React, { Fragment } from 'react'
import Global from './global'
import Container from './container'
import GoogleFonts from './google-fonts'
import { css } from '@emotion/react'

const Layout = ({ children, outside, color, background, wrapper: Wrapper }) => {
  const style = css`
    position: relative;
    min-height: 100vh;
    background: ${background};
    color: ${color};
  `
  return (
    <div css={style}>
      <Global />
      <GoogleFonts fonts={['Hammersmith+One:400', 'Lato:400,700', 'Nunito:300,700', 'Source+Sans+Pro:400,600,700']} />
      <Wrapper>
        <Container>
          {children}
        </Container>
      </Wrapper>
      {outside}
    </div>
  )
}

Layout.defaultProps = {
  wrapper: Fragment
}

export default Layout
