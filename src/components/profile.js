import React from 'react'
import { css } from 'emotion'

export const Profile = p => {
  const photo = css(`
    max-width: ${p.width};
    max-height: ${p.height};
    float: right;
    display: block;
    @media screen and (max-width: 700px) {
      float: none;
      margin: 1em auto !important;
      width: 50%;
    }
  `)
  return (
    <div>
      <img className={photo} src={p.img} />
    </div>
  )
}
