import React from 'react'
import { css } from '@emotion/core'

const wrapper = css`
  position: fixed;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

`

const style = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  background: #ffb277;

  transition: .5s ease-out;
  transition-timing-function: cubic-bezier(.23,1,.32,1);
`

const shape = css`
  position: absolute;
  top: 0;
  right: 0;
  background: #ffb277;
  width: 200px;
  height: 300px


  position: absolute;
  top: 0;
  right: 444px;
  background: #ffb277;
  width: 200px;
  height: 120%;
  transform: skewX(358deg);
  z-index: -1
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
