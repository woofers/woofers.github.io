import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
  margin: 0;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding: ${props => `${props.paddingY} ${props.paddingX}`};
  line-height: 40px;
  letter-spacing: 0.65px;
  font-weight: 900;
  font-family: 'Mulish', sans-serif;
  text-decoration: none;
  transform: ${props => props.transform};
`

Title.defaultProps = {
  color: '#000',
  fontSize: '45px',
  paddingX: '10px',
  paddingY: '20px',
  transform: 'none'
}

export default Title

// color: #fff;
// text-decoration: none;
// font-size: 32px;
// font-weight: 900;
// padding: 20px 10px;
// font-family: 'Mulish',sans-serif;
// line-height: 1px;
// padding-bottom: 40px;
