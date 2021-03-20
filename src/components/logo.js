import React from 'react'
import { keyframes, css } from '@emotion/react'

const blink = keyframes`
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

const highlight = css`
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: -webkit-linear-gradient(-90deg,#ff7170,#ffd57f);
  -webkit-background-clip: text;
  background-clip: text;
`

const cursor = css`
  ${highlight}
  animation: ${blink} 2s infinite;
  display: inline-block;
  transform: scale(1, 1.25) rotate(8deg) translate(5px, 8px);
  font-style: italic;
  width: 30px;
`

const Logo = p => {
  const { children, ...rest } = p
  return (
    <h1 css={hello}>jaxs.on<span css={cursor}>l</span></h1>
  )
}

export default Logo
