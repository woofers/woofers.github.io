import React from 'react'
import { css } from '@emotion/core'
import noHighlight from '../styles/no-highlight'

const iframe = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Frame = p => {
  const { aspectRatio, ...rest } = p
  const container = css`
    ${noHighlight};
    text-align: center;
    margin: 2px 0;
    position: relative;
    padding-bottom: ${100 / aspectRatio}%;
  `
  return (
    <div css={container}>
      <iframe {...rest} css={iframe} frameBorder="0" allowFullScreen />
    </div>
  )
}

Frame.defaultProps = {
  aspectRatio: 16 / 9
}

export default Frame
