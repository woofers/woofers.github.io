import React from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Global from './global'
import Container from './container'
import GoogleFonts from './google-fonts'
import Nav from './nav'

const Header = styled(motion.h1)`
  margin: 0;
  color: #333333;
  font-size: 42px;
  line-height: 40px;
  letter-spacing: -0.2px;
  font-weight: 800;
`

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #fff;
  color: #000;
`

const items = [
  {
    to: '/',
    children: 'Home'
  },
  {
    to: '/about/',
    children: 'About'
  },
  {
    to: '/me/',
    children: 'Me'
  }
]

const Layout = ({ children, location, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Global />
      <GoogleFonts fonts={['Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700']} />
      <Container>
        <Header
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >Jaxson Van Doorn</Header>
        <Nav items={items} />
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3
            }}
            >
            {children}
          </motion.main>
        </AnimatePresence>
      </Container>
    </Wrapper>
  )
}

export default Layout
