import React from 'react'
import { css } from 'emotion'
import { margins } from '../components/globals'

const noHighlight = css(`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`)

const container = css(`
  text-align: center;
  margin: ${margins.small} 0;
  position: relative;
  padding-top: 56.25%;
`)

const iframe = css(`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`)

export const Frame = p => (
  <div className={`${container} ${noHighlight}`}>
    <iframe src={p.src} className={iframe} frameBorder="0" allowFullScreen />
  </div>
)
