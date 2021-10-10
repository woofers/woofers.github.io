import React from 'react'
import { styled } from 'emotion'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Global from './global'
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
      <GoogleFonts
        fonts={[
          'Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700',
          'Mulish:wght@500;900',
          'Montserrat:wght@500',
        ]}
      >
        <link href="/jx-next/fonts/cantarell/font.css" rel="stylesheet" />
      </GoogleFonts>
      <Global />
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          <Main>{children}</Main>
        </AnimatePresence>
      </AnimateSharedLayout>
    </Wrapper>
  )
}

export default Layout
