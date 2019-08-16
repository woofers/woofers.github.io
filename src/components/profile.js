import React from 'react'
import { css } from '@emotion/core'

const GenericProfile = p => {
  const photo = theme => css`
    border-radius: ${theme.margins.profileRadius} !important;
    max-width: ${theme.margins.profile};
    max-height: ${theme.margins.profile};
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
  return <span css={shift}><Profile {...p} />{p.children}</span>
}
