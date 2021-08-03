import React from 'react'
import styled from '@emotion/styled'

const Text = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: 900;
  display: flex;
  flex-direction: column;
  margin: ${({ top, right, bottom, left }) =>
    `${top} ${right} ${bottom} ${left}`};
  width: ${props => props.width};
`

Text.defaultProps = {
  color: '#973838',
  fontSize: '20px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: 'unset'
}

export default Text

// font-size: 20px;
// line-height: 41px;
// color: #973838;
// margin-top: 82px;
