import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import withUtterances from 'with-utterances'
import noHighlight from '../styles/no-highlight'
import React from "react"
import { withTheme } from 'emotion-theming'

const style = css`
  .utterances {
    max-width: none !important;
    ${noHighlight};
  }
`

const utterances = (Page, theme) => {
  const { repo } = useStaticQuery(graphql`{ ...Repo }`).site.siteMetadata
  return withUtterances(
    Page, repo, theme || 'github-light', 'og:title'
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
