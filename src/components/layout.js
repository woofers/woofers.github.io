import React from 'react'
import { styled } from 'emotion'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Global from './global'
import Container from './container'
import GoogleFonts from './google-fonts'
import Meta from './meta'

const Wrapper = styled.div`
  background: #fff;
  color: #000;
`

const Main = styled.main``

const Layout = ({ children, location, ...rest }) => {
  return (
    <Wrapper {...rest} id="root-layout-wrapper">
      <Meta />
      <GoogleFonts fonts={['Cabin:wght@400;700', 'Mulish:wght@500;900']}>
        <link href="/jx-next/fonts/cantarell/font.css" rel="stylesheet" />
      </GoogleFonts>
      <Global />
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          <Main>
            <Container>{children}</Container>
          </Main>
        </AnimatePresence>
      </AnimateSharedLayout>
    </Wrapper>
  )
}

export default Layout
