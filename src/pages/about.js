import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <>
      <StaticImage
        src="https://placekitten.com/400/400"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
    </>
  )
}

export default About
