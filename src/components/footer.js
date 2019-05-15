import React from 'react'
import { css } from '@emotion/core'

const footer = theme => css`
  width: 100%;
  justify-content: center;
  background: ${theme.colors.footer};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const Footer = p => (
  <footer role='contentinfo' css={footer}>
    {p.children}
  </footer>
)

export default Footer
