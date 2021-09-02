import React from 'react'
import Avatar from 'components/avatar'
import Logo from 'components/logo'
import Title from 'components/title'
import Text from 'components/text'
import { styled } from 'emotion'
import ShiftCard from 'components/shift-card'
import ShiftCards from 'components/shift-cards'
import Page from './'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 175px 400px;
  margin-bottom: 50px;
  grid-template-areas: "name cards"
                       "avatar cards";
  @media only screen and (max-width: 1360px) {
    align-self: center;
    grid-template-columns: 1fr;
    grid-template-rows: 175px 400px 600px;
    grid-template-areas: "name"
                         "avatar"
                         "cards";
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.breakpoint}) {
    width: 100%;
  }
`

const Flex = styled.div`
  grid-area: name;
  margin-top: 50px;
  display: flex;
  width: 100%;
  align-items: flex-end;
  > div {
    margin: 0;
  }
`

const List = styled.div`
  grid-area: cards;
  margin-top: 55px;
  height: max-content;
  @media only screen and (max-width: 1360px) {
    grid-row: unset;
  }
`

const LogoContainer = styled.div`
  padding: 0 10px;
  transform: translate(14px, 10px);
`

const StyledAvatar = styled(Avatar)`
  grid-area: avatar;
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

const Me = () => {
  return (
    <>
    <Grid>
      <div>
        <Flex>
          <Text
            fontSize="53px"
            fontWeight="400"
            letterSpacing="-1.5px"
            color="#27292b"
          >
            Hello, I'm
          </Text>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Flex>
      </div>
      <List>
        <ShiftCards items={items} />
      </List>
      <StyledAvatar />
    </Grid>
    <Page />
    </>
  )
}

export default Me
