import { styled } from 'emotion'
import Avatar from 'components/avatar'
import { motion } from 'framer-motion'
import Text from 'components/text'
import Title from 'components/title'
import ShiftCards from 'components/shift-cards'
import Logo from 'components/logo'
import Email from 'components/email'
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
  @media only screen and (max-width: 950px) {
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
  @media only screen and (max-width: 1250px) {
    flex-wrap: wrap;
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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
`

const NavAlign = styled(motion.div)`
  display: flex;
`

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

const Intro = ({ showHeader, hasScrolled }) => (
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
          <LogoContainer>{!showHeader && <Logo delay={delay} />}</LogoContainer>
        </Flex>
        <Contact />
        <EmailContainer
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 0.42 * 2,
            delay: 1.3 + 2 + 0.7 + 0.2,
          }}
        >
          <Email />
        </EmailContainer>
      </Container>
    </Grid>
    <Avatar />
  </Wrapper>
)

export default Intro
