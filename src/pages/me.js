import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Me = () => {
  return (
    <>
      <StaticImage
        src="https://placekitten.com/700/700"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={700}
        height={700}
      />
    </>
  )
}

export default Me
