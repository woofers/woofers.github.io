import { styled } from 'emotion'
import Avatar from 'components/avatar'
import { motion } from 'framer-motion'
import Text from 'components/text'
import ShiftCards from 'components/shift-cards'
import Logo from 'components/logo'
import Contact from './contact'

const Grid = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding-top: 20px;
  max-width: 455px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const delay = 1.3

const Intro = ({ showHeader, hasScrolled }) => (
  <Grid layoutId="grid">
    <Container>
      <Flex>
        <Hello>
          <Text
            fontSize="53px"
            fontWeight="400"
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
            fontSize="53px"
            fontWeight="400"
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
      <StyledAvatar show={!showHeader} intro={!hasScrolled} />
    </Container>
    <Contact />
  </Grid>
)

export default Intro
