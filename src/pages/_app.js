import { ThemeProvider } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'emotion'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import theme from '../themes'


const variants = {
  initial: {
    opacity: 0,
    x: 8,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -8,
  }
}

const Main = styled(motion.div)`

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

  return (
    <ThemeProvider theme={theme}>
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
