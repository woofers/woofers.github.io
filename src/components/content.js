import React from 'react'
import { margins } from '../components/globals'
import { css } from 'emotion'

const hide = css(`
  div:first-child h1 {
    display: none;
  }
`)

const org = css(`
  div {
    margin-bottom: ${margins.small};
    text-align: 'left';
  }
`)

export const Content = p => (
  <div className={p.hideTitle ? `${org} ${hide}` : org}
       dangerouslySetInnerHTML={{ __html: p.html }} />
)
