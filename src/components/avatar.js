import React from 'react'
import { styled, useTheme, useMediaQuery } from 'emotion'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import jaxson from 'images/IMG_0252.jpg'

const Wrapper = styled(motion.div)`
  display: block;
  position: relative;
  --scale-avatar: 1;
  overflow: hidden;
  height: 100%;
  width: 100%;
  max-width: calc(600px / var(--scale-avatar));
  max-height: calc(800px / var(--scale-avatar));
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    max-width: 180px;
  }
`

const Avatar = ({ intro = true, show = true, ...rest }) => {
  const theme = useTheme()
  const mobile = useMediaQuery(`@media only screen and (max-width: ${theme.breakpoints.large.breakpoint})`)
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
          <Image src={jaxson} quality={80} sizes={!mobile ? '1200px' : '180px'}layout="responsive" placeholder="blur" alt="Photo of Jaxson in a grey hoodie and red plaid shirt" />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default Avatar
