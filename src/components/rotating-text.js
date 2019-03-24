import React from 'react'
import { css } from '@emotion/core'
import { colours, transitions } from './globals'
import ReactRotatingText from 'react-rotating-text'

const RotatingText = p => {
  const color = p.color || colours.link
  const cursorColor = p.cursorColor || color
  const blink = css`
    .react-rotating-text-cursor {
      animation: blinking-cursor ${transitions.cursor} 0s infinite;
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
