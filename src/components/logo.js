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
  display: inline;
  white-space: nowrap;
`

const steps = 125

const blink = css`
  animation: ${blinkAnimation} ${steps * (40/3)}ms, ${italicAnimation} ${steps * (10/3)}ms, ${fadeOutAnimation} ${steps * (19/3)}ms;
  animation-iteration-count: 2, 1, 1;
  animation-delay: 0ms, ${steps * (80/3)}ms, ${steps * (98/3)}ms;
  animation-fill-mode: none, forwards, forwards;
`

const name = css`
  ${highlight}
  animation: ${fadeAnimation} ${steps * (10/3)}ms;
  animation-delay: ${steps * 28}ms;
  animation-fill-mode: both;
`

const letter = css`
  animation: ${typeAnimation} ${steps * (10/3)}ms;
  animation-fill-mode: both;
`

const j = css`
  animation: ${typeAnimation} ${steps}ms, ${scaleUpAnimation} ${steps * (10/3)}ms;
  animation-fill-mode: both, both;
  animation-iteration-count: 1, 1;
`

const dot = css`
  animation: ${typeAnimation} ${steps}ms, ${scaleAnimation} ${steps * (14/3)}ms;
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

const Letter = ({ letter: el, index: i, isDot, isFirst }) => {
  const delay = (() => {
    if (isFirst) return `, ${steps * 38}ms`
    if (isDot) return `, ${steps * 36}ms`
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
  if (!ready.current) return null
  return (
    <h1 css={hello}>
      <span aria-label="Jaxson" css={name}>
        {content.split('').map((el, i) =>
          <AllLetter key={`${el}-${i}`} el={el} i={i} />
        )}
      </span>
      <span draggable="false" aria-hidden css={[cursor, blink]}>l</span>
    </h1>
  )
}

export default Logo
