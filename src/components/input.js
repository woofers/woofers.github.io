import React from 'react'
import { css } from '@emotion/react'

const padding = {
  x: 20,
  y: 15
}

const floating = css`
  position: absolute;
  left: ${padding.x}px;
  top: ${padding.y}px;
  pointer-events: none;
`

const label = css`
  width: 100%;
  display: flex;
  font-family: 'Hammersmith One',sans-serif;
  font-weight: 700;
  font-size: 30px;
  position: relative;
  input:valid + label {
    top: -${padding.y * 3}px;
  }
`

const placeholder = css`
  color: #c8ccd0;
  opacity: 1;
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
