import React from 'react'
import { styled } from 'emotion'
import { motion, AnimatePresence } from 'framer-motion'
import jaxson from 'images/IMG_0252.jpg'

const Wrapper = styled(motion.div)`
  --scale-avatar: 1;
  overflow: hidden;
  transform: scale(-1, 1);
  max-width: calc(600px / var(--scale-avatar));
  max-height: calc(800px / var(--scale-avatar));
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    --scale-avatar: 1.5;
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
          <Inner src={jaxson.src} alt="A Jaxson" />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default Avatar
