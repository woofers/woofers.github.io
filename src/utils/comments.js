import { css } from '@emotion/core'
import withUtterances from 'with-utterances'
import noHighlight from './no-highlight'
import React, { Component } from "react"

const style = css`
  .utterances {
    max-width: none !important;
    ${noHighlight};
  }
`

const utterances = (Page) => {
  return withUtterances(
    Page, 'woofers/woofers.github.io', 'github-dark-orange', 'og:title'
  )
}

export const comments = (Page) => {
  return class extends Component {
    render() {
      const Comments = utterances(Page)
      return (
        <div css={style}>
          <Comments {...this.props} />
        </div>
      )
    }
  }
}
