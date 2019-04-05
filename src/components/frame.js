import React from 'react'
import { css } from '@emotion/core'
import noHighlight from '../utils/no-highlight'

const container = theme => css`
  ${noHighlight};
  text-align: center;
  margin: ${theme.margins.small} 0;
  position: relative;
  padding-top: 56.25%;
`

const iframe = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Frame = p => (
  <div css={container}>
    <iframe title={p.title} src={p.src} css={iframe} frameBorder="0" allowFullScreen />
  </div>
)
