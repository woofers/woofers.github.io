import React from 'react'
import { styled } from 'jxsn'

const Img = styled('img', {
  display: 'inline-block',
  borderRadius: 0,
  marginBottom: 0,
  verticalAlign: 'top',
  variants: {
    size: {
      small: {
        width: '14px',
        height: '14px'
      },
      normal: {
        width: '20px',
        height: '20px'
      }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

const surrogatePair = (high, low) =>
  (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000

const isPair = value => value > 0xffff

const toUnicodeBytes = value => {
  const bytes = []
  const tokens = value.split('')
  const add = el => bytes.push(el.toString(16))
  for (let i = 0; i < tokens.length; i++) {
    const high = tokens[i].charCodeAt(0)
    if (i + 1 >= tokens.length) {
      break
    }
    const low = tokens[i + 1].charCodeAt(0)
    const pair = surrogatePair(high, low)
    if (!isPair(pair)) {
      add(high)
    } else {
      add(pair)
      i++
    }
  }
  return bytes
}

const img = code =>
  `https://github.githubassets.com/images/icons/emoji/unicode/${code}.png`

const Emoji = p => {
  const { emoji, ...rest } = p
  const noVs = unescape(escape(emoji).replace('%uFE0F', ''))
  const name = toUnicodeBytes(noVs)
    .filter(el => el !== '200d')
    .join('-')
  return (
    <Img
      alt=""
      src={img(name)}
      size={{ '@initial': 'small', '@sm': 'normal' }}
      {...rest}
    />
  )
}

Emoji.defaultProps = {
  emoji: '👾'
}

export default Emoji
