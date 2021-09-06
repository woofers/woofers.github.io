import React from 'react'
import { styled } from 'emotion'

const Container = styled.div`
  width: 206px;
  min-height: 34px;
  border-width: 1px;
  border-style: inset;
  border-color: rgb(118, 118, 118);
  resize: both;
  overflow: auto;
  &:focus {
    outline: 2px auto Highlight;
    outline: 2px auto -webkit-focus-ring-color;
  }
`

const TextArea = ({ ...rest }) => {
  return (
    <Container contentEditable tabIndex="0" />
  )
}

export default TextArea
