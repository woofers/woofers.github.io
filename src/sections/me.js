import { styled } from 'ruffsponsive'
import { AnimatePresence, motion } from 'framer-motion'
import Title from 'components/title'
import Logo from 'components/logo'
import { useRouter } from 'next/router'
import Tabs from 'components/tabs'

const Wrapper = styled('div', {})
const Body = styled('div', {})
const Grid = styled('div', {})
const Flex = styled('div', {})
const LogoContainer = styled('div', {})
const Hello = styled('div', {})
const Container = styled('div', {})

const EmailContainer = styled(motion.div, {})

const delay = 1.3

const NavAlign = styled(motion.div, {})

const Inner = styled(motion.div, {})

const nav = [
  {
    href: '/',
    shallow: true,
    children: 'Me',
  },
  {
    href: '/projects/',
    shallow: true,
    children: 'Projects',
  },
  {
    href: '/blog/',
    children: 'Blog',
  },
]

const Intro = ({ projects, showHeader, hasScrolled }) => {
  return (
    <>
      <NavAlign
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          duration: 0.8,
          delay: delay + 2,
        }}
      >
        <Tabs
          items={nav}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 0.8,
            delay: delay + 3,
          }}
        />
      </NavAlign>
      <LogoContainer>
        {!showHeader && <Logo delay={delay} shallow />}
      </LogoContainer>
      <Tabs wrap items={projects} />
    </>
  )
}

export default Intro
