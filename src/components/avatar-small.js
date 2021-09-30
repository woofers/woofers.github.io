import React from 'react'
import { styled } from 'emotion'
import { motion, AnimatePresence } from 'framer-motion'
import jaxson from 'images/jaxson.webp'

const Wrapper = styled(motion.div)`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 7px;
  left: 8px;
  position: absolute;
  bottom: 0;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
  aspect-ratio: 1;
`

const Inner = styled.img`
  max-height: 100%;
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
          <Inner
            src={jaxson.src}
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
