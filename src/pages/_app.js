import { useEffect } from 'react'
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
    y: 0,
  },
}

const NavHide = styled(motion.div)``

const Main = styled(motion.div)``

const Header = styled.header`
  margin-top: 30px;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`

const key = path => {
  if (path === '/') return 'home'
  if (path === '/projects/') return 'home'
  if (path.startsWith('/work')) return 'home'
  if (path.startsWith('/contact')) return 'home'
  return path
}

const App = ({ Component, pageProps: props }) => {
  const router = useRouter()
  const path = key(router.asPath)
  const nav = typeof Component.nav === 'boolean' ? Component.nav : true
  const navKey = path === 'home' ? path : 'other'
  useEffect(() => {
    if (typeof window === 'undefined') return
    const onLoad = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          for (let registration of registrations) {
            registration.unregister()
          }
        })
      }
    }
    window.addEventListener('load', onLoad)
    return () => {
      window.removeEventListener('load', onLoad)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <NavHide
          key={navKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {nav && (
            <Container>
              <Header>
                <Nav>
                  <BackButton />
                  <Logo id="header-logo" />
                </Nav>
              </Header>
            </Container>
          )}
        </NavHide>
      </AnimatePresence>
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
