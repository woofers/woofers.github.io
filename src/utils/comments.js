import { css } from '@emotion/core'
import withUtterances from 'with-utterances'
import noHighlight from './no-highlight'
import React, { Component } from "react"
import { withTheme } from 'emotion-theming'

const style = css`
  .utterances {
    max-width: none !important;
    ${noHighlight};
  }
`

const utterances = (Page, theme) => {
  return withUtterances(
    Page, 'woofers/woofers.github.io', theme || 'github-light', 'og:title'
  )
}

export const comments = (Page) => {
  return withTheme(class extends Component {
    render() {
      const { theme } = this.props
      const Comments = utterances(Page, theme.comments)
      return (
        <div css={style}>
          <Comments {...this.props} />
        </div>
      )
    }
  })
}
