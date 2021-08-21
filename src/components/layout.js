import React from 'react'
import { styled } from 'emotion'
import { AnimatePresence, motion } from 'framer-motion'
import Global from './global'
import Container from './container'
import GoogleFonts from './google-fonts'
import Header from './header'

const Text = styled(motion.h1)`
  margin: 0;
  color: #333333;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 2px;
  padding: 20px 50px 0;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
`

const Color = styled.span`
  margin-left: 5px;
  font-size: 42px;
  color: #ff9a19;
  letter-spacing: -0.2px;
  font-weight: 900;
`

const Wrapper = styled.div`
  background: #fff;
  color: #000;
`

const Main = styled(motion.main)`
  min-height: calc(100vh - 225px);
`

const items = [
  {
    to: '/about/',
    children: 'Me',
  },
  {
    to: '/',
    children: 'Work',
  },
  {
    to: '/me/',
    children: 'Contact',
  },
]

const Layout = ({ children, location, ...rest }) => {
  return (
    <Wrapper {...rest} id="root-layout-wrapper">
      <GoogleFonts
        fonts={[
          'Mulish:wght@900',
          'Manrope:wght@800',
          'Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700',
          'Montserrat:ital,wght@0,700;0,800;0,900;1,800;1,900',
          'Playfair+Display:ital,wght@1,900'
        ]}
      />
      <Global />
      <Container>
        <Header items={items} />
      </Container>
      <AnimatePresence exitBeforeEnter>
        <Main
          key={location.pathname}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: 'spring',
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
          }}
        >
          <Container>{children}</Container>
        </Main>
      </AnimatePresence>
    </Wrapper>
  )
}

export default Layout
