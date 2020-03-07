import React from 'react'
import { SwipeLink as Link } from './link'
import { css } from '@emotion/core'

const color = '#f27052'

const footer = css`
  width: 100%;
  justify-content: center;
  background: ${color};
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const Footer = p => (
  <footer role="contentinfo" css={footer}>
    <Link to="/">Home</Link>
  </footer>
)

export default Footer
