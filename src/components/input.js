import React from 'react'
import { styled } from 'emotion'

const Field = styled.input`
  font-size: 16px;
  font-weight: 700;
  font-family: 'Cabin', sans-serif;
  padding: 12px;
  margin: 12px;
  border: none;
  outline: none;
  width: 100%;
  max-width: 240px;
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
    --border: #275EFE;
  }
`

const Input = ({ children, ...rest }) => {
  return <Field type="text" {...rest} />
}

export default Input
