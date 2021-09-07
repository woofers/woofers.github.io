import React, { useRef } from 'react'
import { styled } from 'emotion'
import Label, { shift } from './label'

const Wrapper = styled.div`
  position: relative;
  padding-top: ${props => props.$labelHeight};
  overflow: hidden;
  ${shift};
`

const Container = styled.div`
  width: 100%;
  min-height: ${props => props.$height};
  font-size: 18px;
  font-weight: 700;
  font-family: 'Cabin', sans-serif;
  padding: 12px;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  color: #646b8c;
  box-shadow: inset 0 0 0 var(--border-width, 1px) var(--border, #e1e6f9);
  transition: box-shadow 0.2s;
  cursor: text;
  &::placeholder {
    color: #bbc1e1;
    opacity: 1;
  }
  &:focus {
    --border-width: 1.5px;
    --border: #feb37d;
  }
`

const TextArea = ({
  height,
  placeholder,
  paddingX = '12px',
  paddingY = '12px',
  labelHeight = '28px',
  ...rest
}) => {
  const container = useRef()
  const onPaste = e => {
    e.stopPropagation()
    e.preventDefault()
    if (typeof window === 'undefined') return
    const clipboardData = e.clipboardData || window.clipboardData
    const content = clipboardData.getData('Text')
    document.execCommand('insertText', false, content)
  }
  const padding = {
    $paddingX: paddingX,
    $paddingY: paddingY,
    $labelHeight: labelHeight,
  }
  return (
    <Wrapper {...padding} {...rest}>
      <Container
        $height={height}
        contentEditable
        tabIndex="0"
        role="textbox"
        onPaste={onPaste}
        ref={container}
      />
      {!!placeholder && <Label {...padding}>{placeholder}</Label>}
    </Wrapper>
  )
}

export default TextArea
