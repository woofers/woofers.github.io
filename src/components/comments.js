import { css } from '@emotion/core'
import withUtterances from 'with-utterances'
import noHighlight from '../styles/no-highlight'
import React from 'react'
import { withTheme } from 'emotion-theming'

const style = css`
  .utterances {
    max-width: none !important;
    ${noHighlight};
  }
`

const utterances = (Page, theme) => {
  return withUtterances(
    Page, 'woofers/woofers.github.io', theme || 'github-light', 'og:title', 'comments'
  )
}

export const comments = (Page) => {
  return withTheme(p => {
      const Comments = utterances(Page, p.theme.comments)
      return (
        <div css={style}>
          <Comments {...p} />
        </div>
      )
    }
  )
}
