import React from 'react'
import { styled } from 'emotion'

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
    opacity: 1;
  }
  &:focus {
    --border-width: 1.5px;
    --border: #feb37d;
  }
`

const Input = ({ children, ...rest }) => {
  return <Field type="text" {...rest} />
}

export default Input
