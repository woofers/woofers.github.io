import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { styled } from 'emotion'
import { useStaticQuery, graphql } from 'gatsby'

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "jaxson.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 250
            height: 250
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="A Jaxson"
    />
  )
}

export default Avatar
