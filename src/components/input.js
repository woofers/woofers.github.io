import React from 'react'
import { css } from '@emotion/react'

const style = css`
  font-size: 30px;
  border: none;
  padding: 20px;
  background: #fcf3ec;
  color: #777f9e;
  font-weight: 700;
  border-radius: 5px;
  transition: box-shadow 0.08s ease-in-out;
  box-shadow: 0 0 #ff7170;
  &:focus {
    outline: none;
    box-shadow: 5px 10px #ff7170;
  }
`

const Input = p => {
  return (
    <input css={style} {...p} />
  )
}

export default Input
