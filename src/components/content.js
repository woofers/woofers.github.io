import React from 'react'
import { css } from '@emotion/core'

export const Content = p => {
  const hide = css`
    div:first-of-type h1 {
      display: none;
    }
  `
  const org = theme => css`
    ${p.hideTitle ? hide : ''}
    div {
      margin-bottom: ${theme.margins.small};
      text-align: 'left';
    }
  `
  return (
    <div css={org}
       dangerouslySetInnerHTML={{ __html: p.html }} />
  )
}
