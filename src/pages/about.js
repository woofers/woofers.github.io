import React, { useEffect, useState } from 'react'
import Avatar from 'components/avatar'
import Logo from 'components/logo'
import Title from 'components/title'
import Text from 'components/text'
import { styled } from 'emotion'
import Nav from 'components/nav'
import ShiftCard from 'components/shift-card'
import ShiftCards from 'components/shift-cards'
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import useScrollPosition from 'hooks/use-scroll-position'
import useTimeout from 'hooks/use-timeout'
import Page from './'

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 40px;
  left: 0;
  height: 320px;
  display: flex;
  padding: 0 20px;
`

const RightHeader = styled(Header)`
  justify-content: flex-end;
`

const pageHeight = '575px'
const topShift = '70px'
const Spacer = styled.div`
  height: calc((100vh - ${pageHeight}) / 2 + ${topShift});
`

const Grid = styled.div`
  margin-top: calc((100vh - ${pageHeight}) / 2 - ${topShift});
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 175px 400px;
  grid-template-areas:
    'name cards'
    'avatar cards';
  @media only screen and (max-width: 1360px) {
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

const LogoContainer = styled.div`
  padding: 0 10px;
  transform: translate(14px, 10px);
`

const StyledAvatar = styled(Avatar)`
  grid-area: avatar;
  @media only screen and (max-width: 1360px) {
    margin: auto auto;
  }
`

const items = [
  {
    id: 'intro',
    color: '#fe9c55',
    icon: () => '🧙',
    children: 'Software Developer',
  },
  {
    id: 'tech',
    color: '#1a8bed',
    icon: () => (
      <img src="https://upload.wikimedia.org/wikipedia/en/7/71/Safari_14_icon.png" />
    ),
    children: 'Safari Navigator',
  },
  {
    id: 'hobby-1',
    color: '#a52a2a',
    icon: () => '🐕',
    children: 'Pet Lover',
  },
  {
    id: 'hobby-2',
    color: '#ff251e',
    icon: () => (
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/racing-car_1f3ce-fe0f.png" />
    ),
    children: 'Car Racer',
  },
]

const nav = [
  {
    to: '/about/',
    children: 'Me',
  },
  {
    to: '/',
    children: 'Work',
  },
  {
    to: '/me/',
    children: 'Contact',
  },
]

const Me = () => {
  const [hasScrolled, setScrolled] = useState()
  const { scrollYProgress } = useViewportScroll()
  const { y } = useScrollPosition()
  const showHeader = y > 275
  useTimeout(() => setScrolled(true), 2600)
  return (
    <>
      <Header>{showHeader && <Logo />}</Header>
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
                Hello, I'm
              </Text>
            )}
            <LogoContainer>
              {!showHeader && <Logo delay={hasScrolled ? 0 : 1.3} />}
            </LogoContainer>
          </Flex>
          <List>
            <ShiftCards items={items} show={!showHeader} intro={!hasScrolled} />
          </List>
          <StyledAvatar show={!showHeader} intro={!hasScrolled} />
        </Grid>
      <Spacer />
      <Nav items={nav} />
      <Page />
    </>
  )
}

export default Me
