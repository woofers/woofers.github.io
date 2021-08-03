import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Cards from '../components/cards'
import Title from '../components/title'
import { LivRent, Fts360 } from '../logos'
import Wave from 'react-wavify'


const items = [
  {
    id: 'liv.rent',
    background: '#fe5f55',
    children: (
      <div>
          <div style={{ marginLeft: '20px', marginTop: '20px', width: '100px', height: '200px' }}>
          <LivRent />
        </div>
      </div>
    )
  },
  {
    id: 'fts',
    background: '#ddffb4',
    children: (
      <div>
        <div style={{ width: '100px', height: '200px' }}>
          <Fts360 />
        </div>
      </div>
    )
  },
  {
    id: 'react-wavify',
    background: '#fadc96',
    children: (
      <div>
        <div style={{ fontSize: '50px', width: '100px', height: '200px', marginLeft: '20px', marginTop: '5px', }}>
          🌊
        </div>
        <Wave
          style={{ position: 'absolute', width: '100%', bottom: '0px', clipPath: 'inset(0% 0 0% 0 round 25px)' }}
          fill="#5E9EF1"
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.2,
            points: 4
          }}
          />
          <div style={{ position: 'absolute', width: '100%', height: '40px', bottom: '0px', background: '#5E9EF1', clipPath: 'inset(0% 0 0% 0 round 25px)' }} />
      </div>
    )
  }
]

const Index = () => {
  return (
    <>
      <Title>Work</Title>
      <Cards items={items} />
    </>
  )
}

export default Index
