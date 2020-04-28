import React from 'react'
import { SwipeLink as Link } from './link'
import { css } from '@emotion/core'
import { IoMdArrowRoundUp } from 'react-icons/io'


const footer = theme => css`
  width: 100%;
  justify-content: center;
  background: ${theme.colors.accent};
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Footer = p => (
  <footer role="contentinfo" css={footer}>
    <Link to="/"><IoMdArrowRoundUp /> Home</Link>
  </footer>
)

export default Footer
