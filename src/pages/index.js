import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import Cards from '../components/cards'
import Title from '../components/title'
import Text from '../components/text'
import { LivRent, Fts360, AlienExpansion } from '../logos'
import Wave from 'react-wavify'

const alpha = 0.36

const Menu = styled.div`
  display: flex;
  width: max-content;
  position: relative;
  padding: 0 0 10px;
  &:after {
    content: '';
    background-image: linear-gradient(
      90deg,
      #fff 0%,
      rgba(255, 255, 255, ${alpha}) 5%,
      #ff00 50%,
      rgba(255, 255, 255, ${alpha}) 95%,
      #fff 100%
    );
    position: absolute;
    height: 100%;
    width: 100%;
  }
`

const Right = styled.span`
  align-self: flex-end;
  margin-right: 15px;
`

const items = [
  {
    id: 'liv.rent',
    background: '#fe5f55',
    logo: (
      <div>
        <div
          style={{
            marginLeft: '20px',
            marginTop: '20px',
            width: '100px',
            height: '200px',
          }}
        >
          <LivRent />
        </div>
      </div>
    ),
    children: (
      <Text>
        Junior Software Developer at{' '}
        <Title
          as="a"
          paddingX="0"
          paddingY="10px"
          color="#fff"
          fontSize="32px"
          href="https://machobear.ca"
        >
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
        <div style={{ width: '100px', height: '200px' }}>
          <Fts360 />
        </div>
      </div>
    ),
    children: (
      <Text color="#38976a" width="100%">
        Former Software Developer at{' '}
        <Title
          as="a"
          paddingX="0"
          paddingY="10px"
          color="#231f20"
          fontSize="32px"
          href="https://ftsinc.com"
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
        <div
          style={{
            fontSize: '50px',
            width: '100px',
            height: '200px',
            marginLeft: '20px',
            marginTop: '5px',
          }}
        >
          🌊
        </div>
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
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '40px',
            bottom: '0px',
            background: '#5E9EF1',
            clipPath: 'inset(0% 0 0% 0 round 25px)',
          }}
        />
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

const Index = () => {
  return (
    <>
      <Menu>
        <Title color="#c9c9c9">Me</Title>
        <Title>Work</Title>
        <Title color="#c9c9c9">Contact</Title>
      </Menu>
      <Cards items={items} />
    </>
  )
}

export default Index
