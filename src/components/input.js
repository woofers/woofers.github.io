import React from 'react'
import { styled } from 'emotion'
import Label from './label'


const Wrapper = styled.div`
  position: relative;
  padding-top: 28px;
  > ${props => !props.$hasPlaceholder ? ':is(input:valid, input:focus) ~ label' : 'label'} {
    transform: translate(12px, 0);
  }
  > input:valid ~ span {
    transform: translate(-55px, calc(12px + 28px));
    z-index: 0;
  }
  overflow: hidden;
`


const Field = styled.input`
  flex: 0 0 50%;
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
  &::placeholder {
    color: #bbc1e1;
    opacity: 0;
  }
  &:focus {
    --border-width: 1.5px;
    --border: #feb37d;
  }
`

const Input = ({ children, label, placeholder, ...rest }) => {
  const hasBothLabels = label && placeholder
  const hasAnyLabel = label || placeholder
  const firstLabel = hasAnyLabel ? (label ?? placeholder) : false
  const secondLabel = hasBothLabels ? placeholder : undefined
  return (
    <Wrapper $hasPlaceholder={secondLabel}>
      <Field type="text" {...rest} placeholder={secondLabel} required pattern="\S*+" />
      {!!firstLabel && <Label>{firstLabel}</Label>}
      {!!secondLabel && <Label aria-hidden as="span" delay="0.12s">{secondLabel}</Label>}
    </Wrapper>
  )
}

export default Input
