import React from 'react'
import Global from './global'
import Container from './container'
import GoogleFonts from './google-fonts'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #fff;
  color: #000;
`

const Layout = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Global />
      <GoogleFonts fonts={['Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700']} />
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}

export default Layout
