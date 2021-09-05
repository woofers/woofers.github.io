import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { styled } from 'emotion'
import { useStaticQuery, graphql } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

const Wrapper = styled(motion.div)`
  > div {
    border-radius: 50%;
    background-color: #feb37d;
    box-shadow: inset 0.3px -0.4px 8px 2px #00000030;
  }
`

const Avatar = ({ intro = true, show = true, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "jaxson.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 400
            height: 400
            placeholder: TRACED_SVG
            quality: 90
          )
        }
      }
    }
  `)

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: intro ? 0.5 : 0.15, delay: intro ? 1.3 : 0 }}
          {...rest}
        >
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="A Jaxson"
          />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default Avatar
