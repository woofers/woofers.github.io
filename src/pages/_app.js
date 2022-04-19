import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider, styled } from 'ruffsponsive'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import Logo from 'components/logo'
import Container from 'components/container'
import Header from 'components/header'
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

const NavHide = styled(motion.div, {})

const Main = styled(motion.div, {})

const background = `linear-gradient(-225deg, hsl(216deg 64% 76%) 0%, hsl(213deg 61% 78%) 9%, hsl(211deg 57% 79%) 18%, hsl(209deg 52% 81%) 27%, hsl(207deg 46% 83%) 36%, hsl(204deg 39% 85%) 45%, hsl(205deg 47% 82%) 55%, hsl(209deg 62% 76%) 64%, hsl(213deg 71% 70%) 73%, hsl(216deg 77% 64%) 82%, hsl(220deg 81% 58%) 91%, hsl(224deg 84% 51%) 100%)
`
const Wrapper = styled('div', {
  position: 'relative',
})

const InnerWrapper = styled('div', {
  zIndex: 1,
  position: 'relative',
})

const Background = styled('div', {
  zIndex: 0,
  position: 'fixed',
  opacity: 0.35,
  inset: 0,
  width: '100%',
  height: '100%',
  background,
})

const Nav = styled('nav', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
})

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
    <Wrapper>
      <Background />
      <InnerWrapper>
        {/*
        <AnimatePresence exitBeforeEnter>
          <NavHide
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />
          </NavHide>
        </AnimatePresence>
        */}
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
      </InnerWrapper>
    </Wrapper>
  )
}

export default App
