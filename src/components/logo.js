import React, { useState } from 'react'
import { keyframes, css } from '@emotion/react'
import useAnimationFrame from './use-animation-frame'

const typeAnimation = keyframes`
  0% {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  99% {
    position: static;
  }
  100% {
    display: inline;
  }
`

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
  filter: brightness(0) saturate(100%) invert(15%) sepia(33%) saturate(615%) hue-rotate(191deg) brightness(92%) contrast(89%);
  transition: filter 0.2s cubic-bezier(0, 0, 0.1, 1) 0ms;
`

const letter = css`
  animation: ${typeAnimation} 150ms;
  animation-fill-mode: both;
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
const freezeDelay = startDelay + 10
const fadeTicks = freezeDelay + 8
const blinkTicks = fadeTicks + 2

// [0,5] Wait blink
// (5, 13] Typing
// (13, 22) Freeze
// 22 - Italic
// 22 No Blink
// 30 - Fade
const steps = 150

const Logo = p => {
  const { children, ...rest } = p
  const [count, setCount] = useState(0)
  const isNotTyping = count > content.length + freezeDelay
  const isBlink = count < content.length + blinkTicks
  const isFade = count > content.length + fadeTicks
  const ifNotTyping = style => isNotTyping ? style : null
  const ifBlink = style => isBlink ? style : null
  const ifFade = style => isFade ? style : null
  return (
    <h1 css={hello}>
      <span aria-label={content} css={name}>
        {content.split('').map((el, i) => <span style={{ animationDelay: `${(i + 5) * steps}ms`}} css={letter}>{el}</span>)}
      </span>
      <span aria-hidden css={[cursor, blink]}>l</span>
    </h1>
  )
}

export default Logo
