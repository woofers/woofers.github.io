import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import Cards from '../components/cards'
import Title from '../components/title'
import Text from '../components/text'
import { LivRent, Fts360, AlienExpansion } from '../logos'
import Wave from 'react-wavify'

const Right = styled.span`
  align-self: flex-end;
  margin-right: 15px;
`

const Box = styled.div`
  width: 100px;
  height: 200px;
`

const LivLogo = styled(Box)`
  margin-left: 20px;
  margin-top: 20px;
`

const WavifyLogo = styled(Box)`
  font-size: 50px;
  margin-left: 20px;
  margin-top: 5px;
`

const WavifyBar = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0px;
  background: #5e9ef1;
  clip-path: inset(0% 0 0% 0 round 25px);
`

const items = [
  {
    id: 'liv.rent',
    background: '#fe5f55',
    logo: (
      <div>
        <LivLogo>
          <LivRent />
        </LivLogo>
      </div>
    ),
    children: (
      <Text>
        Junior Software Developer at{' '}
        <Title paddingX="0" paddingY="10px" color="#fff" fontSize="32px">
          Machobear Studios Inc.
        </Title>{' '}
        <Right>working on liv.rent</Right>
      </Text>
    ),
  },
  {
    id: 'fts',
    background: '#ddffb4',
    logo: (
      <div>
        <Box>
          <Fts360 />
        </Box>
      </div>
    ),
    children: (
      <Text color="#38976a" width="100%">
        Former Software Developer at{' '}
        <Title
          paddingX="0"
          paddingY="10px"
          color="#231f20"
          fontSize="32px"
          transform="translateX(32%)"
        >
          FTS Inc.
        </Title>{' '}
        <Right>who worked on FTS 360</Right>
      </Text>
    ),
  },
  {
    id: 'react-wavify',
    background: '#fadc96',
    justifyContent: 'flex-end',
    logo: (
      <div>
        <WavifyLogo>🌊</WavifyLogo>
        <Wave
          style={{
            position: 'absolute',
            width: '100%',
            bottom: '0px',
            clipPath: 'inset(0% 0 0% 0 round 25px)',
          }}
          fill="#5E9EF1"
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.2,
            points: 4,
          }}
        />
        <WavifyBar />
      </div>
    ),
    children: (
      <Title
        paddingX="30px"
        paddingY="10px"
        color="#226699"
        fontSize="32px"
        transform="translateX(0)"
      >
        react-wavify
      </Title>
    ),
  },
  {
    id: 'alien-expansion',
    background:
      'url(https://cdn.jsdelivr.net/gh/woofers/ludum-dare-44/screenshots/title-screen.gif)',
    logo: (
      <div>
        <div
          style={{
            width: '100px',
            height: '200px',
            marginLeft: '9px',
            marginTop: '5px',
          }}
        >
          <AlienExpansion />
        </div>
      </div>
    ),
  },
]

const Index = props => {
  return (
    <>
      <Cards items={items} />
    </>
  )
}

export default Index
