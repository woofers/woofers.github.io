import React, { Children } from 'react'
import { styled } from 'emotion'
import Label, { shift } from './label'

const Wrapper = styled.div`
  position: relative;
  padding-top: ${props => props.$labelHeight};
  overflow: hidden;
  ${shift};
`

const Field = styled.input`
  font-size: 18px;
  font-weight: 700;
  font-family: 'Cabin', sans-serif;
  padding: ${props =>
    `${props.$paddingY} ${props.$paddingX} ${props.$paddingY} calc(${props.$iconWidth} + ${props.$paddingX})`};
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
    --border-width: 2px;
    --border: #feb37d;
  }
`

const Icon = styled.div`
  position: absolute;
  top: ${props => props.$labelHeight};
  left: calc(${props => props.$paddingX} / 2);
  height: calc(100% - ${props => props.$labelHeight});
  width: ${props => props.$iconWidth};
  padding: 0 ${props => props.$iconPadding};
  pointer-events: none;
  user-select: none;
`

const Input = ({
  children,
  label,
  placeholder,
  paddingX = '12px',
  paddingY = '12px',
  labelHeight = '28px',
  iconWidth = '0px',
  iconPadding = '5px',
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
    $iconWidth: iconWidth,
    $iconPadding: iconPadding,
  }
  return (
    <Wrapper $hasPlaceholder={secondLabel} {...padding}>
      <Field
        type="text"
        {...rest}
        placeholder={secondLabel}
        required
        pattern="^(?!\s*$).+"
        {...padding}
      />
      {!!firstLabel && <Label {...padding}>{firstLabel}</Label>}
      {!!secondLabel && (
        <Label aria-hidden as="span" delay="0.12s" {...padding}>
          {secondLabel}
        </Label>
      )}
      {Children.count(children) > 0 && <Icon {...padding}>{children}</Icon>}
    </Wrapper>
  )
}

export default Input
