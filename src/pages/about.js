import React from 'react'
import Avatar from 'components/avatar'
import Logo from 'components/logo'
import Title from 'components/title'
import Text from 'components/text'
import { styled } from 'emotion'

const Flex = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  align-items: flex-end;
  > div {
    margin: 0 5px;
  }
`

const LogoContainer = styled.div`
  padding: 0 10px;
  transform: translate(14px, 10px);
`

const List = styled.div``

const HeadingContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 80px;
`

const IconContainer = styled.div`
  font-size: ${props => props.fontSize};
  > img {
    width: 64px;
  }
`

const Heading = ({ color, icon: Icon, children, ...props }) => (
  <HeadingContainer>
    <Title
      textTransform="lowercase"
      fontSize="45px"
      fontWeight="400"
      letterSpacing="-2.25px"
      color={color}
    >
      > {children}
    </Title>
    <IconContainer fontSize="45px">
      <Icon />
    </IconContainer>
  </HeadingContainer>
)

const Me = () => {
  return (
    <>
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
      <Avatar />
      <List>
        <Heading icon={() => '🧙'} color="#fa743e">
          Software Developer
        </Heading>

        <Heading
          color="#1a8bed"
          icon={() => (
            <img src="https://upload.wikimedia.org/wikipedia/en/7/71/Safari_14_icon.png" />
          )}
        >
          Safari Navigator
        </Heading>
        <Heading icon={() => '🐕'} color="#a52a2a">
          Pet Lover
        </Heading>
        <Heading
          color="#ff251e"
          icon={() => (
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/racing-car_1f3ce-fe0f.png" />
          )}
        >
          Car Racer
        </Heading>
      </List>
    </>
  )
}

export default Me
