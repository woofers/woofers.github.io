import React, { useState } from 'react'
import { keyframes, css } from '@emotion/react'

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const hello = css`
  font-size: 70px;
  width: 100%;
`

const clip = css`
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  -webkit-background-clip: text;
  background-clip: text;
`

const highlight = css`
  background: -webkit-linear-gradient(-90deg,#ff7170,#ffd57f);
  ${clip}
`

const blink = css`
  animation: ${blinkAnimation} 2s infinite;
`

const name = css`
  ${highlight}
  filter: brightness(0);
  transition: filter 0.2s cubic-bezier(0, 0, 0.1, 1) 0ms;
`

const bright = css`
  filter: brightness(1);
`

const cursor = css`
  ${highlight}
  display: inline-block;
  width: 30px;
  transition: transform 0.2s cubic-bezier(0, 0, 0.1, 1) 0ms;
`

const italic = css`
  transform: scale(1, 1.25) rotate(8deg) translate(5px, 8px);
  font-style: italic;
`

const content = 'jaxs.on'
const startDelay = 5
const fadeTicks = startDelay + 8
const blinkTicks = fadeTicks + 2

const Logo = p => {
  const { children, ...rest } = p
  const [index, setIndex] = useState(0)
  const isNotTyping = index > content.length + startDelay
  const isBlink = index < content.length + blinkTicks
  const isFade = index > content.length + fadeTicks
  const ifNotTyping = style => isNotTyping ? style : null
  const ifBlink = style => isBlink ? style : null
  const ifFade = style => isFade ? style : null
  setTimeout(() => setIndex(index + 1), 150)
  return (
    <h1 css={hello}>
      <span css={[name, ifFade(bright)]}>{content.substring(0, Math.max(index - startDelay, 0))}</span>
      <span css={[cursor, ifNotTyping(italic), ifBlink(blink)]}>l</span>
    </h1>
  )
}

export default Logo
