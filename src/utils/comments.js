import { injectGlobal } from 'emotion'
import withUtterances from 'with-utterances'
import noHighlight from './no-highlight'

injectGlobal(`
  .utterances {
     max-width: none;
     ${noHighlight}
   }
`)

export const comments = (template) => {
  return withUtterances(
    template, 'woofers/woofers.github.io', 'github-dark-orange', 'og:title'
  )
}
