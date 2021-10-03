import { ThemeProvider } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'emotion'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import Logo from 'components/logo'
import Container from 'components/container'
import BackButton from 'components/back-button'
import theme from '../themes'


const variants = {
  initial: {
    opacity: 0,
    x: 0,
    y: -16,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.15,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -8,
    y: 0
  }
}

const NavHide = styled.div`
  transition: opacity 0.3s ease;
  opacity: 1;
  &[aria-hidden="true"] {
    opacity: 0;
    pointer-events: none;
  }
`

const Main = styled(motion.div)`

`

const Header = styled.header`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`

const key = path => {
  if (path === '/') return 'home'
  if (path.startsWith('/work')) return 'home'
  if (path.startsWith('/contact')) return 'home'
  return path
}

const App = ({ Component, pageProps: props }) => {
  const router = useRouter()
  const path = key(router.asPath)
  const nav = typeof Component.nav === 'boolean' ? Component.nav : true
  return (
    <ThemeProvider theme={theme}>
       <NavHide aria-hidden={!nav}>
        <Container><Header><BackButton /><Logo id="header-logo" /></Header></Container>
        </NavHide>
      <AnimatePresence exitBeforeEnter>
        <Main
          key={path}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Layout>
            <Component {...props} />
          </Layout>
        </Main>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
