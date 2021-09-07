import React from 'react'
import { styled } from 'emotion'
import Label, { shift } from './label'

const Wrapper = styled.div`
  position: relative;
  padding-top: ${props => props.$labelHeight};
  overflow: hidden;
  ${shift};
`

const Field = styled.input`
  flex: 0 0 50%;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Cabin', sans-serif;
  padding: ${props => `${props.$paddingY} ${props.$paddingX}`};
  border: none;
  outline: none;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  color: #646b8c;
  box-shadow: inset 0 0 0 var(--border-width, 1px) var(--border, #e1e6f9);
  transition: box-shadow 0.2s;
  &::placeholder {
    color: #bbc1e1;
    opacity: 0;
  }
  &:focus {
    --border-width: 1.5px;
    --border: #feb37d;
  }
`

const Input = ({
  children,
  label,
  placeholder,
  paddingX = '12px',
  paddingY = '12px',
  labelHeight = '28px',
  placeholderWidth = '65px',
  ...rest
}) => {
  const hasBothLabels = label && placeholder
  const hasAnyLabel = label || placeholder
  const firstLabel = hasAnyLabel ? label ?? placeholder : false
  const secondLabel = hasBothLabels ? placeholder : undefined
  const padding = {
    $paddingX: paddingX,
    $paddingY: paddingY,
    $labelHeight: labelHeight,
    $placeholderWidth: placeholderWidth,
  }
  return (
    <Wrapper $hasPlaceholder={secondLabel} {...padding}>
      <Field
        type="text"
        {...rest}
        placeholder={secondLabel}
        required
        pattern="\S*+"
        {...padding}
      />
      {!!firstLabel && <Label {...padding}>{firstLabel}</Label>}
      {!!secondLabel && (
        <Label aria-hidden as="span" delay="0.12s" {...padding}>
          {secondLabel}
        </Label>
      )}
    </Wrapper>
  )
}

export default Input
