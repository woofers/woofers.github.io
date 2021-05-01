import React from 'react'
import { css, keyframes } from '@emotion/core'

const anim = keyframes`
  0% {
    right: 600px;
    width: calc(100vw - 600px);
  }
  100% {
    right: 0;
    width: 600px;
  }
`

const wrapper = css`

`

const style = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  background: #ffb277;
  transition: right .5s ease-out, width .5s ease-out;
  transition-timing-function: cubic-bezier(.23,1,.32,1);
  z-index: 1;

  animation: ${anim} 700ms;
  animation-iteration-count: 1;
  animation-delay: 500ms;
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

const PopUp = () => {
  return (
    <div css={wrapper}>
      <div css={style}>
      </div>
      <div css={shape}>
      </div>
    </div>
  )
}

export default PopUp
