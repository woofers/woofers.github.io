import React from 'react'
import noHighlight from '../styles/no-highlight'
import withUtterances from 'with-utterances'
import { withTheme } from 'emotion-theming'
import { css } from '@emotion/core'

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

const Comments = withTheme(p => {
  const Comments = utterances(() => null, p.theme.comments)
  return (
    <div css={style}>
      <Comments {...p} />
    </div>
  )
})

export default Comments
