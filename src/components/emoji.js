import React from 'react'
import { css } from '@emotion/core'

const img = code => `//github.githubassets.com/images/icons/emoji/unicode/${code}.png`
const border = css`
  border-radius: 0 !important;
`

const Emoji = ({ emoji, size }) =>
  (<img alt="" css={border} width={size} height={size} src={img(emoji.codePointAt(0).toString(16).toLowerCase())} />)

Emoji.defaultProps = {
  emoji: '👾',
  size: '20px'
}

export default Emoji
