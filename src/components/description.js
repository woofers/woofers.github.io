import React from 'react'
import isEmoji from 'emoji-regex'
import Emoji from './emoji'

const Description = ({ text }) => {
  const desc = []
  const regexp = isEmoji()
  let match
  let lastMatch
  let i = 0;
  // eslint-disable-next-line
  while (match = regexp.exec(text)) {
    if (lastMatch) {
      i = lastMatch.index + lastMatch[0].length
      const segment = text.substring(i + 1, match.index)
      if (segment) desc.push(<span key={`${segment}-${i}-${lastMatch[0]}-text-${text}`}>{segment}</span>)
    }
    const emoji = match[0]
    desc.push(<span key={`${text}-${match[0]}-${match.index}`} ><Emoji emoji={emoji} /> </span>)
    i = match.index + emoji.length
    lastMatch = match
  }
  const last = text.substring(i + 1, text.length)
  if (last) desc.push(<span key={`${last}-last-${text}`}>{last}</span>)
  return (<div>{desc}</div>)
}

export default Description
