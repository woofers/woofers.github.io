import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { styled } from 'emotion'
import { useStaticQuery, graphql } from 'gatsby'

const Wrapper = styled.div`
  > div {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
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
