import React from 'react'
import { styled } from 'emotion'
import { motion, AnimatePresence } from 'framer-motion'
import jaxson from 'images/jaxson.webp'

const Wrapper = styled(motion.div)`
  --scale-avatar: 1;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #feb37d;
  box-shadow: inset 0.3px -0.4px 8px 2px #00000030;
  overflow: hidden;
  max-width: calc(400px / var(--scale-avatar));
  max-height: calc(400px / var(--scale-avatar));
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    --scale-avatar: 1.2;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.breakpoint}) {
    --scale-avatar: 1.5;
  }
`

const Inner = styled.img`
  max-height: 100%;
  object-fit: contain;
  object-position: top;
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
