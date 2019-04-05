import React from 'react'
import { css } from '@emotion/core'
import { colours } from './globals'
import ReactRotatingText from 'react-rotating-text'

const RotatingText = p => {
  const color = p.color || colours.link
  const cursorColor = p.cursorColor || color
  const blink = theme => css`
    .react-rotating-text-cursor {
      animation: blinking-cursor ${theme.transitions.cursor} 0s infinite;
      margin-left: 5px;
      color: ${cursorColor};
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
  return (
    <span css={blink}>
      <ReactRotatingText {...p} color={color} />
    </span>
  )
}

export default RotatingText
