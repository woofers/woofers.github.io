import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

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
