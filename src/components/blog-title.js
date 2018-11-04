import React from 'react'

export const BlogTitle = p => (
  <div style={{ textAlign: 'right' }}>
    {p.title ?
      <div>
        <h1 style={{ display: 'inline' }}>{p.title}</h1>
        {p.icon ?
         <img style={{ marginLeft: '10px', imageRendering: p.icon.mode }}
              width="55px" height="55px" src={p.icon.image} /> :
       null}
      </div>
    : null}
    {p.date ? <p>{p.date}</p> : null }
  </div>
)
