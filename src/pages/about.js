import React from 'react'
import Avatar from 'components/avatar'
import Logo from 'components/logo'
import Title from 'components/title'
import Text from 'components/text'
import { styled } from 'emotion'
import ShiftCard from 'components/shift-card'
import ShiftCards from 'components/shift-cards'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-auto-rows: 175px;
`

const Flex = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  align-items: flex-end;
  > div {
    margin: 0;
  }
`

const List = styled.div`
  padding-top: 55px;
  grid-row: span 2;
`

const LogoContainer = styled.div`
  padding: 0 10px;
  transform: translate(14px, 10px);
`

const items = [
  {
    id: 'intro',
    color: '#fa743e',
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
      <Avatar />
    </Grid>
  )
}

export default Me
