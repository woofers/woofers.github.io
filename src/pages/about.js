import React from 'react'
import Avatar from 'components/avatar'
import Logo from 'components/logo'
import Title from 'components/title'
import Text from 'components/text'
import { styled } from 'emotion'

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

const LogoContainer = styled.div`
  padding: 0 10px;
  transform: translate(14px, 10px);
`

const List = styled.div`
  padding-top: 55px;
  grid-row: span 2;
`

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

const Block = styled.div`
  background-color: ${props => props.color};
  border-radius: 25px;
  width: 585px;
  height: 250px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px;
  ${props =>
    !props.active &&
    `
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    height: 80px;
    box-shadow: none;
  `}
`

const Heading = ({
  color,
  active,
  icon: Icon,
  contrast = '#fff',
  children,
  ...rest
}) => (
  <Block color={color} active={active}>
    <HeadingContainer>
      <Title
        textTransform="lowercase"
        fontSize="45px"
        fontWeight="400"
        letterSpacing="-2.25px"
        color={!active ? color : contrast}
      >
        › {children}
      </Title>
      <IconContainer fontSize="45px">
        <Icon />
      </IconContainer>
    </HeadingContainer>
    <Text color={contrast}>
      This is text. This is text. This is text. This is text. This is text. This
      is text. This is text. This is text. This is text. This is text. This is
      text. This is text. This is text.
    </Text>
  </Block>
)

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
        <Heading icon={() => '🧙'} color="#fa743e" active>
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
      <Avatar />
    </Grid>
  )
}

export default Me
