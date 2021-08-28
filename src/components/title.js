import React from 'react'
import { styled } from 'emotion'

const Title = styled.h1`
  margin: 0;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding: ${props => `${props.paddingY} ${props.paddingX}`};
  line-height: 40px;
  letter-spacing: ${props => props.letterSpacing};
  font-weight: ${props => props.fontWeight};
  font-family: 'Mulish', sans-serif;
  text-decoration: none;
  text-transform: ${props => props.textTransform};
  transform: ${props => props.transform};
  transition: color 0.3s ease-in-out;
  width: ${props => props.width};
  &[aria-current='page'] {
    color: #27292b;
  }
`

Title.defaultProps = {
  color: '#000',
  fontSize: '45px',
  paddingX: '10px',
  paddingY: '20px',
  transform: 'none',
  width: 'unset',
  fontWeight: '900',
  letterSpacing: '0.65px',
  textTransform: 'none'
}

export default Title
