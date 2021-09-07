import React from 'react'
import { styled } from 'emotion'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import jaxson from 'images/jaxson.png'

const Wrapper = styled(motion.div)`
  > div {
    border-radius: 50%;
    background-color: #feb37d;
    box-shadow: inset 0.3px -0.4px 8px 2px #00000030;
  }
`

const Avatar = ({ intro = true, show = true, ...rest }) => {
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
          <Image
            src={jaxson}
            width={400}
            height={400}
            placeholder="blur"
            alt="A Jaxson"
          />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default Avatar
