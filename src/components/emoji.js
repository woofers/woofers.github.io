import React from 'react'
import { css } from '@emotion/core'

const border = css`
  margin-bottom: 0;
  font-family: Noto Color Emoji;
`

const Emoji = p => {
  const { children, size, role, ...rest } = p
  const ariaHidden = !rest['aria-label']
  return (
    <span css={border} role={role} aria-hidden={ariaHidden} {...rest}>
      {children}
    </span>
  )
}

Emoji.defaultProps = {
  children: '👾',
  size: '20px',
  role: 'img'
}

export default Emoji
