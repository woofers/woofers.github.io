import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import Page from '../components/page'
import Nav from '../components/nav'

const About = () => {
  return (
    <>
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

export default About
