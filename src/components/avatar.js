import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { styled } from 'emotion'
import { useStaticQuery, graphql } from 'gatsby'

const Wrapper = styled.div`
  > div {
    border-radius: 50%;
    background-color: #feb37d;
    box-shadow: inset 0.3px -0.4px 8px 2px #00000030;
  }
`

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "jaxson.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 400
            height: 400
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)
  return (
    <Wrapper>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="A Jaxson"
      />
    </Wrapper>
  )
}

export default Avatar
