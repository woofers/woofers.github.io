import React, { Fragment } from 'react'
import isEmoji from 'emoji-regex'
import Emoji from './emoji'

const Description = ({ text: initialText, ...rest }) => {
  const text = initialText || ''
  const desc = []
  const regexp = isEmoji()
  let match
  let lastMatch
  let i = 0
  while ((match = regexp.exec(text))) {
    if (lastMatch) {
      i = lastMatch.index + lastMatch[0].length
      const segment = text.substring(i + 1, match.index)
      if (segment && '\ud83e' !== segment)
        desc.push(
          <Fragment key={`${segment}-${i}-${lastMatch[0]}-text-${text}`}>
            {segment}
          </Fragment>
        )
    }
    const emoji = match[0]
    desc.push(
      <Fragment key={`${text}-${match[0]}-${match.index}`}>
        <Emoji emoji={emoji} />{' '}
      </Fragment>
    )
    i = match.index + emoji.length
    lastMatch = match
  }
  const last = text.substring(i, text.length)
  if (last) desc.push(<Fragment key={`${last}-last-${text}`}>{last}</Fragment>)
  return <Fragment {...rest}>{desc}</Fragment>
}

export default Description
