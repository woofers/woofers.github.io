import React from 'react'
import { css } from '@emotion/react'

const padding = {
  x: 20,
  y: 15
}

const floating = css`
  transition: color 0.2s cubic-bezier(0, 0, 0.1, 1) 0ms,
              transform 0.2s cubic-bezier(0, 0, 0.1, 1) 0ms;
  position: absolute;
  left: ${padding.x}px;
  top: ${padding.y}px;
  pointer-events: none;
`

const label = css`
  margin-top: 45px;
  width: 100%;
  display: flex;
  font-family: 'Hammersmith One',sans-serif;
  font-weight: 700;
  font-size: 30px;
  position: relative;
  color: #c8ccd0;
  transform: translate(0, 0);
  input:valid + label {
    font-size: 25px;
    color: #2b3044;
    transform: translate(-${padding.x * 0.5}px, -${padding.y * 3.75}px);
  }
`

const placeholder = css`
`

const style = css`
  filter: none;
  width: 100%;
  font-size: 30px;
  border: none;
  padding: ${padding.y}px ${padding.x}px;
  background: #fbf7f3;
  color: #2b3044;
  font-weight: 700;
  border-radius: 5px;
  transition: box-shadow 0.08s ease-in-out;
  box-shadow: 0 4px #c8ccd0;
  &:focus {
    outline: none;
    box-shadow: 0 5px #ff9b74;
  }

  ::-webkit-input-placeholder {
    ${placeholder}
  }
  ::-moz-placeholder {
    ${placeholder}
  }
  ::-ms-placeholder {
    ${placeholder}
  }
  ::placeholder {
    ${placeholder}
  }

  font-family: 'Hammersmith One',sans-serif;
`


const Input = ({ placeholder, ...rest }) => {
  return (
    <div css={label}>
      <input css={style} {...rest} required pattern=".*\S.*" />
      <label css={floating}>{placeholder}</label>
    </div>
  )
}

export default Input
