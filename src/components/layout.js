import React from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Global from './global'
import Container from './container'
import GoogleFonts from './google-fonts'
import Nav from './nav'

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background: #fff;
`

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
  position: relative;
  min-height: 100vh;
  background: #fff;
  color: #000;
`

const Main = styled(motion.main)`
  position: relative;
  min-height: calc(100vh - 123.5px);
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
      <GoogleFonts fonts={['Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700', 'Montserrat:ital,wght@0,700;0,900;1,900']} />
      <Global />
      <Header>
        <Text
          className="subtitle"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hey I'm <Color>Jaxson</Color>
        </Text>
        <Nav items={items} />
      </Header>
      <AnimatePresence exitBeforeEnter>
        <Main
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
          <Container>
            {children}
          </Container>
        </Main>
      </AnimatePresence>
    </Wrapper>
  )
}

export default Layout
