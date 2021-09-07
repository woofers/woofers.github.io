import React, { useRef } from 'react'
import { styled } from 'emotion'

const Container = styled.div`
  width: 206px;
  min-height: 34px;
  border-width: 1px;
  border-style: inset;
  border-color: rgb(118, 118, 118);
  resize: both;
  overflow: auto;
  cursor: text;
  &:focus {
    outline: 2px auto Highlight;
    outline: 2px auto -webkit-focus-ring-color;
  }
`

const TextArea = ({ ...rest }) => {
  const container = useRef()
  const onPaste = e => {
    e.stopPropagation()
    e.preventDefault()
    if (typeof window === 'undefined') return
    const clipboardData = e.clipboardData || window.clipboardData
    const content = clipboardData.getData('Text')
    document.execCommand('insertText', false, content)
  }
  return (
    <Container
      contentEditable
      tabIndex="0"
      role="textbox"
      onPaste={onPaste}
      ref={container}
    />
  )
}

export default TextArea
