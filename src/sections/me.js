import { styled } from 'emotion'
import Avatar from 'components/avatar'
import { motion } from 'framer-motion'
import Text from 'components/text'
import Title from 'components/title'
import ShiftCards from 'components/shift-cards'
import Logo from 'components/logo'
import Email from 'components/email'
import Contact from './contact'

const SimpleText = styled.p`
  color: #233044;
  font-size: 18px;
  font-family: Cantarell, sans-serif;
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  @media only screen and (max-width: 950px) {
    align-items: center;
    width: 100%;
  }
`

const Flex = styled.div`
  margin: 0;
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
  grid-area: sidebar;
  padding-top: 20px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

const delay = 1.3

const Intro = ({ showHeader, hasScrolled }) => (
  <Grid>
    <Container>
      <Title
        width="450px"
        fontSize="60px"
        color="#fe7255"
        lineHeight="57px"
        paddingX="0"
        as={motion.div}
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          duration: 0.8,
          delay: delay + 2,
        }}
      >
        Software Developer
      </Title>
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
            transitiocentern={{
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
    </Container>
    <EmailContainer
      initial={{ bottom: 0, opacity: 0 }}
      animate={{ bottom: 500, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 0.42,
        delay: 1.3 + 2 + 0.7,
      }}
    >
      <Email />
    </EmailContainer>
  </Grid>
)

export default Intro
