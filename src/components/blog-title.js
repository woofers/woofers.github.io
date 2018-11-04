import React from 'react'
import { margins } from './globals'

export const BlogTitle = p => (
  <div style={{ textAlign: 'right' }}>
    {p.title ?
      <div>
        <h1 style={{ display: p.icon ? 'inline' : 'block',
                     margin: `${margins.extraSmall} 0` }}>{p.title}</h1>
        {p.icon ?
         <img style={{ marginLeft: '10px', imageRendering: p.icon.mode }}
              width="55px" height="55px" src={p.icon.image} /> :
       null}
      </div>
    : null}
    {p.date ? <p>{p.date}</p> : null }
  </div>
)
