import React from 'react'
import { css, keyframes } from '@emotion/core'

const width = 600

const anim = keyframes`
  0% {
    transform: translateX(-${width}px) scaleX(${width * 10});
  }
  100% {
    transform: translateX(0) scaleX(${width});
  }
`

const wrapper = css`
`

const container = css`
  padding: 200px 50px;
  position: fixed;
  top: 0;
  right: 0;
  width: ${width}px;
  z-index: 2;
`

const style = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 1px;
  height: 100vh;
  background: #ffb277;
  transition: transform .5s ease-out;
  transition-timing-function: cubic-bezier(.23,1,.32,1);
  z-index: 1;

  transform-origin: right;

  animation: ${anim} 700ms;
  animation-iteration-count: 1;
  animation-delay: 0ms;
  animation-fill-mode: both;
`

const shape = css`
  position: fixed;
  top: 0;
  right: 444px;
  background: #ffb277;
  width: 200px;
  height: 120%;
  transform: skewX(358deg);
  z-index: 2;
`

const PopUp = ({ children }) => {
  return (
    <>
      <div css={wrapper}>
        <div css={style}>
        </div>
        <div css={shape}>
        </div>
      </div>
      <div css={container}>
        {children}
      </div>
    </>
  )
}

export default PopUp
