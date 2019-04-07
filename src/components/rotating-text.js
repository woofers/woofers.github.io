import React from 'react'
import { css } from '@emotion/core'
import ReactRotatingText from 'react-rotating-text'
import { withTheme } from 'emotion-theming'

const RotatingText = p => {
  const color = p.color || p.theme.colors.link
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

export default withTheme(RotatingText)
