import React from 'react'
import { css } from '@emotion/core'
import noHighlight from '../utils/no-highlight'

const iframe = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Frame = p => {
  const container = theme => css`
    ${noHighlight};
    text-align: center;
    margin: ${theme.margins.small} 0;
    position: relative;
    padding-bottom: ${100 / p.aspectRatio}%;
  `
  return (
    <div css={container}>
      <iframe title={p.title} src={p.src} css={iframe} frameBorder="0" allowFullScreen />
    </div>
  )
}

Frame.defaultProps = {
  aspectRatio: 16 / 9
}
