import React from 'react'
import { injectGlobal } from 'emotion'
import withUtterances from 'with-utterances'

injectGlobal(`
  .utterances {
     max-width: none;
   }
`)

export const comments = (template) => {
  return withUtterances(
    template, 'woofers/woofers.github.io', 'github-dark', 'og:title'
  )
}
