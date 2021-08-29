import React from 'react'
import Avatar from 'components/avatar'
import Logo from 'components/logo'
import Title from 'components/title'
import Text from 'components/text'
import { styled } from 'emotion'

const Flex = styled.div`
  margin-top: -10px;
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

const Me = () => {
  return (
    <>
      <Avatar />
      <Flex>
        <Text
          fontSize="53px"
          fontWeight="400"
          letterSpacing="-1.5px"
          color="#8082ff"
        >
          Hello, I'm
        </Text>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Title
          textTransform="lowercase"
          fontWeight="400"
          letterSpacing="-2.25px"
          color="#fa743e"
        >
          - Software Developer 🧙
        </Title>
      </Flex>
      <Flex>
        <Text
          fontSize="53px"
          fontWeight="400"
          letterSpacing="-1.5px"
          color="#8082ff"
          style={{ opacity: 0 }}
        >
          Hello, I'm
        </Text>
        <LogoContainer style={{ opacity: 0 }}>
          <Logo />
        </LogoContainer>
        <Title
          textTransform="lowercase"
          fontWeight="400"
          letterSpacing="-2.25px"
          color="#1a8bed"
        >
          - safari navigator
        </Title>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/71/Safari_14_icon.png"
          style={{ width: '64px', transform: 'translateY(23px)' }}
        />
      </Flex>
      <Flex>
        <Text
          fontSize="53px"
          fontWeight="400"
          letterSpacing="-1.5px"
          color="#8082ff"
          style={{ opacity: 0 }}
        >
          Hello, I'm
        </Text>
        <LogoContainer style={{ opacity: 0 }}>
          <Logo />
        </LogoContainer>
        <Title
          textTransform="lowercase"
          fontWeight="400"
          letterSpacing="-2.25px"
          color="#a52a2a"
        >
          - pet lover 🐕
        </Title>
      </Flex>
      <Flex>
        <Text
          fontSize="53px"
          fontWeight="400"
          letterSpacing="-1.5px"
          color="#8082ff"
          style={{ opacity: 0 }}
        >
          Hello, I'm
        </Text>
        <LogoContainer style={{ opacity: 0 }}>
          <Logo />
        </LogoContainer>
        <Title
          textTransform="lowercase"
          fontWeight="400"
          letterSpacing="-2.25px"
          color="#ff251e"
        >
          - car racer
        </Title>
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/racing-car_1f3ce-fe0f.png"
          style={{ width: '64px', marginBottom: '20px' }}
        />
      </Flex>
    </>
  )
}

export default Me
