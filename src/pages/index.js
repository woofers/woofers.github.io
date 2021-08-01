import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Cards from '../components/cards'

const Index = () => {
  return (
    <>
      <Cards />
      <StaticImage
        src="https://placekitten.com/600/900"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={600}
        height={900}
      />
    </>
  )
}

export default Index
