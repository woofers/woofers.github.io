import { styled } from 'emotion'
import Avatar from 'components/avatar'
import { motion } from 'framer-motion'
import Text from 'components/text'
import ShiftCards from 'components/shift-cards'
import Logo from 'components/logo'

const Grid = styled.div`
  grid-area: splash;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 175px 400px;
  grid-template-areas:
    'name cards'
    'avatar cards';
  @media only screen and (max-width: 1360px) {
    margin-top: 0;
    align-self: center;
    grid-template-columns: 1fr;
    grid-template-rows: 175px 400px 600px;
    grid-template-areas:
      'name'
      'avatar'
      'cards';
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.breakpoint}) {
    grid-template-rows: 175px 300px 600px;
    width: 100%;
  }
`

const Flex = styled.div`
  grid-area: name;
  display: flex;
  width: 100%;
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

const StyledAvatar = styled(Avatar)`
  grid-area: avatar;
  @media only screen and (max-width: 1360px) {
    margin: auto auto;
  }
`

const LogoContainer = styled.div`
  padding: 0 10px;
  transform: translate(14px, 15px);
`

const Intro = ({ showHeader, hasScrolled }) => (
  <Grid layoutId="grid">
    <Flex>
      {!showHeader && (
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
          Hello, I{"'"}m
        </Text>
      )}
      <LogoContainer>
        {!showHeader && <Logo delay={hasScrolled ? 0 : 1.3} />}
      </LogoContainer>
    </Flex>
    <StyledAvatar show={!showHeader} intro={!hasScrolled} />
  </Grid>
)

export default Intro
