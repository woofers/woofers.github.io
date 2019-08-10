import React from 'react'
import { css } from '@emotion/core'

const GenericProfile = p => {
  const photo = css`
    max-width: ${p.width};
    max-height: ${p.height};
  `
  return (
    <img css={photo} src={p.img} alt={p.alt} />
  )
}

export const Profile = p => (
  <GenericProfile img="https://avatars3.githubusercontent.com/u/7284672?s=460&v=4"
                  alt="Jaxson Van Doorn"
                  {...p} />
)

export const AboutProfile = p => {
  const shift = css`
    float: right;
    display: block;
    @media screen and (max-width: 700px) {
      float: none;
      margin: 1em auto !important;
      text-align: center;
    }
  `
  return <span css={shift}><Profile {...p} /></span>
}
