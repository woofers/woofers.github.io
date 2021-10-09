import { styled } from 'emotion'
import Avatar from 'components/avatar'
import { AnimatePresence, motion } from 'framer-motion'
import Text from 'components/text'
import Title from 'components/title'
import ShiftCards from 'components/shift-cards'
import Logo from 'components/logo'
import Email from 'components/email'
import { useRouter } from 'next/router'
import Contact from './contact'
import Tabs from 'components/tabs'

const SimpleText = styled.p`
  color: #233044;
  font-size: 18px;
  font-family: Cantarell, sans-serif;
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    align-items: center;
    width: 100%;
  }
`

const Flex = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;
  > div {
    margin: 0;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mini.breakpoint}) {
    margin-bottom: 20px;
  }
`

const StyledAvatar = styled(Avatar)``

const LogoContainer = styled.div`
  padding-left: 10px;
`

const Hello = styled.div`
  display: flex;
`

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mini.breakpoint}) {
    padding: 0;
  }
`

const Box = styled.div`
  color: #5d5d5d;
  border: 1px solid #ccc;
  padding: 10px;
  font-family: 'Mulish', sans-serif;
  border-radius: 5px;
  font-size: 16px;
`

const EmailContainer = styled(motion.div)`
  margin-top: 40px;
`

const delay = 1.3

const Wrapper = styled.div`
  grid-area: sidebar;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15vh;
  > div:first-of-type {
    margin-left: 40px;
  }
  > div:last-of-type {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    margin: 0;
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`

const NavAlign = styled(motion.div)`
  display: flex;
  max-width: 585px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mini.breakpoint}) {
    flex-direction: column-reverse;
  }
`

const Body = styled(motion.div)`
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    margin-bottom: 40px;
  }
`

const Inner = styled(motion.div)``

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
  const router = useRouter()
  const isProjects = router?.asPath === '/projects/'
  return (
    <Wrapper>
      <Grid>
        <Container>
          <NavAlign
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 0.8,
              delay: delay + 2,
            }}
          >
            <Title
              as={motion.div}
              fontSize="62px"
              color="#fe7255"
              lineHeight="57px"
              paddingX="0"
              initial={{ color: '#fe6255' }}
              animate={{ color: '#c9c9c9' }}
              textTransform="lowercase"
              transition={{
                type: 'spring',
                duration: 0.4,
                delay: delay + 2 + 0.8,
              }}
            >
              Software Developer
            </Title>
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
          <Flex>
            <Hello>
              <Text
                fontFamily="Cantarell"
                fontSize="53px"
                fontWeight="700"
                letterSpacing="-1.5px"
                color="#27292b"
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: 'spring',
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                Hello
              </Text>
              <Text
                fontFamily="Cantarell"
                fontSize="53px"
                fontWeight="700"
                letterSpacing="-1.5px"
                color="#27292b"
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: delay,
                }}
              >
                {', '}I{"'"}m
              </Text>
            </Hello>
            <LogoContainer>
              {!showHeader && <Logo delay={delay} />}
            </LogoContainer>
          </Flex>
          <Body
            initial={{ height: '0px', opacity: 0 }}
            animate={{ height: '265px', opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 0.42,
              delay: 1.3 + 2 + 0.7 + 0.2,
            }}
          >
            <AnimatePresence exitBeforeEnter>
              <Inner
                key={router.asPath}
                initial={{ opacity: 0, y: -100, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 0, x: -200 }}
                transition={{
                  type: 'spring',
                  duration: 0.5,
                  bounce: 0.3
                }}
              >
                {isProjects ? (
                  <><Tabs wrap items={projects} /></>
                ) : (
                  <>
                    <Contact />
                    <EmailContainer>
                      <Email />
                    </EmailContainer>
                  </>
                )}
              </Inner>
            </AnimatePresence>
          </Body>
        </Container>
      </Grid>
      <Avatar />
    </Wrapper>
  )
}

export default Intro
