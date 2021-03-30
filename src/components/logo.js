import React, { useRef, useEffect } from 'react'
import { keyframes, css } from '@emotion/react'

const hide = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const clip = css`
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  -webkit-background-clip: text;
  background-clip: text;
`

const highlight = css`
  background: -webkit-linear-gradient(-90deg, #ff7170, #ffd57f);
  ${clip}
`

const scaleUpAnimation = keyframes`
  0% {
    font-size: 60px;
  }
  100% {
    font-size: 70px;
  }
`

const scaleAnimation = keyframes`
  0% {
    font-size: 70px;
  }
  99% {
    font-size: 0;
  }
  100% {
    ${hide};
  }
`

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const fadeAnimation = keyframes`
  0% {
    background: #2b3044;
    ${clip}
  }
  100% {
    ${highlight}
  }
`

const italicAnimation = keyframes`
  0% {
    font-style: normal;
    transform: scale(1) rotate(0) translate(0);
  }
  1% {
    font-style: italic;
  }
  100% {
    transform: scale(1, 1.25) rotate(8deg) translate(5px, 8px);
    font-style: italic;
  }
`

const typeAnimation = keyframes`
  0% {
    ${hide}
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
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const hello = css`
  font-size: 70px;
  width: 100%;
`

const blink = css`
  animation: ${blinkAnimation} 2s, ${italicAnimation} 0.2s, ${fadeOutAnimation} 1s;
  animation-iteration-count: 2, 1, 1;
  animation-delay: 0s, 4s, 4.9s;
  animation-fill-mode: none, forwards, forwards;
`

const name = css`
  ${highlight}
  animation: ${fadeAnimation} 0.5s;
  animation-delay: 4.2s;
  animation-fill-mode: both;
`

const letter = css`
  animation: ${typeAnimation} 150ms;
  animation-fill-mode: both;
`

const j = css`
  animation: ${typeAnimation} 150ms, ${scaleUpAnimation} 0.7s;
  animation-fill-mode: both, both;
  animation-iteration-count: 1, 1;
`

const dot = css`
  animation: ${typeAnimation} 150ms, ${scaleAnimation} 0.7s;
  animation-fill-mode: both, forwards;
  animation-iteration-count: 1, 1;
`

const cursor = css`
  ${highlight}
  user-select: none;
  pointer-events: none;
  display: inline-block;
  width: 30px;
`

const content = 'Jaxs.on'
const startDelay = 5

// [0,5] Wait blink
// (5, 13] Typing
// (13, 22) Freeze
// 22 - Italic
// 22 No Blink
// 30 - Fade
const steps = 150


const Letter = ({ letter: el, index: i, isDot, isFirst }) => {
  const delay = (() => {
    if (isFirst) return ', 5.8s'
    if (isDot) return ', 5.4s'
    return ''
  })()
  return (
    <span
      style={{ animationDelay: `${(i + startDelay) * steps}ms${delay}`}}
      css={isFirst ? j : (isDot ? dot : letter)}
    >
      {el}
    </span>
  )
}

const AllLetter = ({ el, i }) => {
  if (el === 'J') return <Letter isFirst letter={el} index={i} />
  if (el === '.') return <Letter ariaHidden isDot letter={el} index={i} />
  return <Letter letter={el} index={i} />
}

const Logo = p => {
  const { children, ...rest } = p
  const ready = useRef()
  useEffect(() => {
    ready.current = true
  }, [])
  if (!ready.current) return <div style={{ height: '105px' }}></div>
  return (
    <h1 css={hello}>
      <span aria-label={content} css={name}>
        {content.split('').map((el, i) =>
          <AllLetter key={`${el}-${i}`} el={el} i={i} />
        )}
      </span>
      <span draggable="false" aria-hidden css={[cursor, blink]}>l</span>
    </h1>
  )
}

export default Logo
