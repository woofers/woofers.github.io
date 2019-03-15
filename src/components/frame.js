import React from 'react'
import { css } from 'emotion'
import { margins } from '../components/globals'
import noHighlight from '../utils/no-highlight'

const container = css(`
  text-align: center;
  margin: ${margins.small} 0;
  position: relative;
  padding-top: 56.25%;
  ${noHighlight}
`)

const iframe = css(`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`)

export const Frame = p => (
  <div className={`${container}`}>
    <iframe title={p.title} src={p.src} className={iframe} frameBorder="0" allowFullScreen />
  </div>
)
