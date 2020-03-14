import React from 'react'
import { css } from '@emotion/core'
import ReactRotatingText from 'react-rotating-text'

const blink = theme => css`
  .react-rotating-text-cursor {
    animation: blinking-cursor 2s infinite;
    margin-left: 2px;
    display: inline-block;
    transform: scale(3.5, 1);
  }

  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const RotatingText = p => {
  const { theme, ...rest } = p
  return (
    <span css={blink}>
      <ReactRotatingText {...rest} color="inherit" />
    </span>
  )
}

export default RotatingText
