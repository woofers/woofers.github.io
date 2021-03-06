import React from 'react'
import { css } from '@emotion/react'

const placeholder = css`
  color: #c8ccd0;
  opacity: 1;
`

const style = css`
  width: 100%;
  font-size: 30px;
  border: none;
  padding: 15px 20px;
  background: #fbf7f3;
  color: #2b3044;
  font-weight: 700;
  border-radius: 5px;
  transition: box-shadow 0.08s ease-in-out;
  box-shadow: 0 4px #c8ccd0;
  &:focus {
    outline: none;
    box-shadow: 0 4px #ff9b74;
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

const Input = p => {
  return (
    <input css={style} {...p} />
  )
}

export default Input
