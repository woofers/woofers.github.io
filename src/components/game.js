import React from 'react'
import { margins } from '../components/globals'
import { css } from 'emotion'
import { Content } from '../components/content'
import { Frame } from '../components/frame'

const grid = css(`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(405px, 1fr));
  grid-template-rows: 860px;
  grid-column-gap: 50px;
  grid-row-gap: 6px;
`)

export const Game = p => (
  <div className={p.portrait ? grid : null}>
    <Frame src={p.src} />
    <Content html={p.instruction} />
  </div>
)