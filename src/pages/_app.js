import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  LazyMotion,
  AnimatePresence,
  m as motion,
  useTransform,
  useScroll
} from 'framer-motion'
import { styled, Typography, Flex } from 'jxsn'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import Footer from 'components/footer'
import useMediaQuery from 'components/use-media-query'
import { IoMdArrowRoundBack } from 'react-icons/io'
import 'react-pico-8/styles.css'

const Relative = styled('div', {
  zIndex: '15',
  position: 'relative'
})

const Fade = styled('div', {
  $$feather: 'rgba(0, 0, 0, 0)',
  $$fadeMiddle: 'rgba(241, 245, 249, 0.4)',
  $$fadeColor: 'rgba(241, 245, 249, 1)',
  width: '100%',
  background:
    'linear-gradient(0deg, $$fadeColor 0%, $$fadeMiddle 50%, $$feather 100%)',
  //maskImage: 'linear-gradient(to top, $$fadeColor, $$feather)',
  bottom: '0',
  height: '120px',
  position: 'absolute',
  zIndex: '3',
  opacity: '1',
  minHeight: '120px',
  //backdropFilter: 'blur(4px)',
  pointerEvents: 'none',
  display: 'none',
  '@sm': {
    display: 'block'
  }
})

const Spacer = styled('div', {
  height: '60px'
})

const width = '1180px'
const height = '1008px'

const x = `max((100vw - ${width}) / 2, var(---px))`
//const y = scale => `max(((100vh - ${height}) / 2) * ${scale}, 0px)`

const homePadding = `max(12vh, 0px) 0px max(30vh, 54px) ${x}`
const homeMobilePadding = `max(0vh, 0px) 0px max(0vh, 54px) max(0vw, 0px)`
const padding = `max(5vh, 54px) 0px max(0vh, 0px) ${x}`

const loadFeatures = () =>
  import('components/animation.js').then(res => res.default)

const variantsWrapper = {
  initial: ({ isHome, desktop }) => ({
    top: isHome ? 100 : 0,
    padding: homePadding,
  }),
  enter: ({ isHome, desktop }) => ({
    top: 0,
    padding: !isHome ? padding : desktop ? homePadding : homeMobilePadding,
    transition: {
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1]
    }
  }),
  exit: ({ desktop }) => ({
    padding: desktop ? homePadding : homeMobilePadding
  })
}

const variants = {
  initial: {
    opacity: 0,
    x: 0,
    y: -16
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.15,
      ease: [0.61, 1, 0.88, 1]
    }
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -4
  }
}

const footer = {
  initial: {
    opacity: 0,
    x: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1]
    }
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 10,
    transition: {
      delay: 0,
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1]
    }
  }
}

const Title = styled('div', {
  position: 'absolute',
  left: 0,
  width: '100%',
  px: '$3',
  py: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '18px',
  height: '54px',
  variants: {
    position: {
      top: {
        bottom: 0
      },
      bottom: {
        top: 0
      }
    }
  }
})

const background = `linear-gradient(-225deg, hsl(216deg 64% 76%) 0%, hsl(213deg 61% 78%) 9%, hsl(211deg 57% 79%) 18%, hsl(209deg 52% 81%) 27%, hsl(207deg 46% 83%) 36%, hsl(204deg 39% 85%) 45%, hsl(205deg 47% 82%) 55%, hsl(209deg 62% 76%) 64%, hsl(213deg 71% 70%) 73%, hsl(216deg 77% 64%) 82%, hsl(220deg 81% 58%) 91%, hsl(224deg 84% 51%) 100%)
`
const Wrapper = styled('div', {
  position: 'relative'
})

const InnerWrapper = styled('div', {
  zIndex: 3,
  position: 'relative'
})

const Background = styled('div', {
  zIndex: 0,
  position: 'fixed',
  opacity: 0.35,
  inset: 0,
  width: '100%',
  height: '100%',
  background
})

const LayoutDiv = props => <motion.div {...props} layout />

const ContentWrapper = styled(LayoutDiv, {
  $$px: '0px',
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  padding: homePadding,
  '@sm': {
    $$px: '20px'
  }
})

const Card = styled('div', {
  borderBottom: '1px solid rgb(213 217 223)',
  position: 'relative',
  zIndex: 5,
  background: '#f1f5f9',
  overflowX: 'hidden',
  overflowY: 'auto',
  color: '$gray700',
  width: '100%',
  height: '100%',
  mx: 'auto',
  px: '12px',
  py: '24px',
  $$shadowColor: '206deg 14% 54%',
  $$shadowElevationLow: `-0.5px 0.6px 1px hsl($$shadowColor / 0.19),
    -0.9px 1.1px 1.8px -0.7px hsl($$shadowColor / 0.29),
    -2px 2.4px 4.1px -1.3px hsl($$shadowColor / 0.4)`,
  '@sm': {
    p: '$7',
    borderBottom: 'none',
    pr: `calc(${x} + $7)`
  }
})

const Border = styled(motion.div, {
  width: '100%',
  maxWidth: `calc(${width} + 40px)`,
  left: '50%',
  transform: 'translateX(-50%)',
  px: '$$px',
  zIndex: 30,
  position: 'absolute',
  height: '1px',
  display: 'none',
  '@sm': {
    display: 'block'
  },
  variants: {
    border: {
      none: {
        dispaly: 'none',
        '@sm': {
          display: 'block'
        }
      },
      top: {
        display: 'block'
      }
    }
  },
  defaultVariants: {
    border: 'none'
  }
})

const BorderInner = styled('div', {
  background: 'rgb(213 217 223)',
  width: '100%',
  height: '100%'
})

const Content = styled(LayoutDiv, {
  height: '100%'
})

const BackWrapper = styled(motion.a, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  br: '8px',
  width: '38px',
  height: '38px',
  transition: 'background-color 300ms ease 0s',
  '&:hover': {
    backgroundColor: 'rgba(55, 65, 81, 0.07)'
  }
})

const TopWrapper = styled(motion.div, {
  position: 'relative',
  zIndex: 2,
  '> div:first-of-type': {
    pr: `calc(${x} + 12px)`
  }
})

const BottomWrapper = styled(motion.div, {
  position: 'relative',
  zIndex: 2,
  '> div:first-of-type': {
    pr: `calc(${x} + 12px)`
  }
})

const back = path => {
  const noSlash = path.replace(/\/$/, '')
  const upNoSlash = noSlash.substring(0, noSlash.lastIndexOf('/'))
  const up = upNoSlash + '/'
  if (up === '/projects/') return '/'
  if (up === '/blog/') return '/'
  return up
}

const BackButton = () => {
  const router = useRouter()
  const path = router.asPath
  const href = back(path)
  return (
    <Link href={href} passHref>
      <BackWrapper
        title="Go back"
        aria-label="Home"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
      >
        <IoMdArrowRoundBack size="24px" />
      </BackWrapper>
    </Link>
  )
}

const key = path => {
  if (path === '/') return 'home'
  if (path.endsWith('/play/')) return 'play'
  if (path.startsWith('/projects')) return 'projects'
  if (path === '/404') return 'home'
  return path
}

const App = ({ Component, pageProps: props }) => {
  const { buttons, title } = props
  const router = useRouter()
  const path = key(router.asPath)
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
  const desktop = useMediaQuery('(min-width: 640px)')
  const ref = useRef()
  const { scrollY } = useScroll({ container: ref })
  const y = useTransform(scrollY, value => {
    const max = 114
    const scale = Math.min(Math.max(Math.min(value, max) / max, 0), 1)
    return 20 - scale * 20
  })
  const opacity = useTransform(scrollY, value => {
    const max = 114
    const scale = Math.min(Math.max(Math.min(value, max) / max, 0), 1)
    return scale
  })
  const opacityBr = useTransform(scrollY, value => {
    if (path !== 'home') return 1
    const max = 50
    const scale = Math.min(Math.max(Math.min(value, max) / max, 0), 1)
    return scale
  })
  return (
    <LazyMotion features={loadFeatures}>
      <Wrapper>
        <InnerWrapper>
          <AnimatePresence mode="wait">
            <Layout>
              <ContentWrapper
                custom={{ isHome: path === 'home', desktop }}
                variants={variantsWrapper}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <AnimatePresence>
                  {path === 'home' && (
                    <TopWrapper key="home-title" style={{ y, opacity }}>
                      <Title position="top">
                        <Flex align="center" css={{ gap: '0 6px' }}>
                          <Typography noMargin type="h6">
                            Jaxson Van Doorn
                          </Typography>
                        </Flex>
                      </Title>
                    </TopWrapper>
                  )}
                  {path !== 'home' && title && (
                    <TopWrapper
                      key="top-title"
                      variants={footer}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <Title position="top">
                        <Flex align="center" css={{ gap: '0 6px' }}>
                          <BackButton />
                          <Typography noMargin type="h6">
                            {title}
                          </Typography>
                        </Flex>
                      </Title>
                    </TopWrapper>
                  )}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  {buttons && buttons.length > 0 && (
                    <TopWrapper
                      key="top-links"
                      variants={footer}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <Footer position="top" data={buttons}></Footer>
                    </TopWrapper>
                  )}
                </AnimatePresence>
                <Border border={path !== 'home' ? 'top' : 'none'} style={{ opacity: opacityBr }}>
                  <BorderInner />
                </Border>
                <Card ref={ref}>
                  <Content
                    key={path}
                    variants={path !== 'home' ? variants : {}}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <Component {...props} />
                    {path === 'home' && <Spacer />}
                  </Content>
                </Card>
                {path === 'home' && (
                  <Relative>
                    <Fade />
                  </Relative>
                )}
                <BottomWrapper>
                  <Footer position="bottom" />
                </BottomWrapper>
              </ContentWrapper>
            </Layout>
          </AnimatePresence>
        </InnerWrapper>
      </Wrapper>
    </LazyMotion>
  )
}

export default App
