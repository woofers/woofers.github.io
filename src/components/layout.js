import React from 'react'
import { styled } from 'ruffsponsive'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Global from './global'
import GoogleFonts from './google-fonts'
import Meta from './meta'

const Wrapper = styled('div', {
  color: '$slate800',
})

const Main = styled('main', {})

const Layout = ({ children, location, ...rest }) => {
  return (
    <Wrapper {...rest} id="root-layout-wrapper">
      <Meta />
      <GoogleFonts
        fonts={[
          'Cabin:wght@400;700',
          'Mulish:wght@500;900',
          'Montserrat:wght@500',
        ]}
      >
        <link href="/fonts/cantarell/font.css" rel="stylesheet" />
        <link href="/fonts/albertsans/font.css" rel="stylesheet" />
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
