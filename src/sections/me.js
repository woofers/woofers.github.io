import { styled } from 'emotion'
import Avatar from 'components/avatar'
import { motion } from 'framer-motion'
import Text from 'components/text'
import ShiftCards from 'components/shift-cards'
import Logo from 'components/logo'

const Grid = styled.div`
  grid-area: splash;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const Flex = styled.div`
  margin: 0;
  margin-left: 20px;
  margin-bottom: 50px;
  display: flex;
  width: 450px;
  align-items: flex-end;
  > div {
    margin: 0;
  }
  @media only screen and (max-width: 1360px) {
    justify-content: center;
  }
`

const List = styled.div`
  grid-area: cards;
  margin-top: 55px;
  height: max-content;
`

const StyledAvatar = styled(Avatar)``

const LogoContainer = styled.div`
  padding: 0 10px;
  transform: translate(14px, 15px);
`

const delay = 1.3

const Intro = ({ showHeader, hasScrolled }) => (
  <Grid layoutId="grid">
    <Flex>
      <Text
        fontSize="53px"
        fontWeight="400"
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
      <LogoContainer>{!showHeader && <Logo delay={delay} />}</LogoContainer>
    </Flex>
    <StyledAvatar show={!showHeader} intro={!hasScrolled} />
  </Grid>
)

export default Intro
