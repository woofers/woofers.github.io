import React from 'react'
import { css } from '@emotion/core'

export const BlogTitle = p => {
  const title = theme => css`
    display: ${p.icon ? 'inline' : 'block'};
    margin: ${theme.margins.extraSmall} 0;
  `
  const noRounded = css`
    border-radius: 0 !important;
    margin
  `
  const icon = theme => css`
    ${p.icon.type === 'normal' ? noRounded : ''}
    margin-left: 10px;
    image-rendering: ${p.icon.mode};
  `
  return (
    <div style={{ textAlign: 'right' }}>
      {p.title ?
        <div>
          <h1 css={title}>{p.title}</h1>
          {p.icon ?
           <img css={icon}
                width="55px" height="55px"
                src={p.icon.image} aria-hidden="true" alt="" /> :
         null}
        </div>
      : null}
      {p.date ? <p>{p.date}</p> : null }
    </div>
  )
}
