import React from 'react'
import Link from './icon-link'
import { SwipeLink } from './link'
import { css } from '@emotion/react'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { Tada } from 'react-micron'

const footer = theme => css`
  width: 100%;
  justify-content: center;
  background: ${theme.colors.accentGradient};
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-weight: 700;

  *::selection {
    background: ${theme.colors.selection.home} !important;
  }
`

const Footer = p => (
  <footer role="contentinfo" css={footer}>
    <Tada>
      <Link to="/" link={SwipeLink} icon={IoMdArrowRoundUp}>
        Home
      </Link>
    </Tada>
  </footer>
)

export default Footer
