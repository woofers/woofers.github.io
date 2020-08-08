import React from 'react'
import { Typer, TyperElement } from 'react-yat'
import Emoji from './emoji'
import { css } from '@emotion/core'
import { small } from '../styles/text'

const image = css`
  ${small}
  > span {
    > span:first-of-type {
      img {
        width: 0;
        height: 0;
      }
    }
  }
`

const Tagline = p => (
  <div css={image}>
    <Typer prefix="I" cursorWidth={3.9}>
      <TyperElement>build games <Emoji size="16px" alt="controller" emoji="🎮" /></TyperElement>
      <TyperElement>design apps <Emoji size="16px" alt="paintbrush" emoji="🖌" /></TyperElement>
      <TyperElement>craft tools <Emoji size="16px" alt="wrench" emoji="🔧" /></TyperElement>
    </Typer>
  </div>
)

export default Tagline
