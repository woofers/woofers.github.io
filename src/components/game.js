import React from 'react'
import { css } from '@emotion/core'
import Content from './content'
import Frame from './frame'
import Pico8 from './pico-8'
import Widget from '@ludum-dare-badges/react'

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0px, 463px));
  grid-column-gap: 50px;
  grid-row-gap: 6px;
  justify-content: center;
`

const Game = p => {
  const { portrait, lang, title, src, instruction, ludumDare, placeholder } = p
  const isPico = lang === 'pico'
  return (
    <div css={portrait && !isPico ? grid : ''}>
      {
        isPico
          ? <Pico8 src={src} placeholder={placeholder} />
          : <Frame aspectRatio={portrait ? (9 / 16) : (16 / 9)}
                   title={title} src={src} />
      }
      <Content html={instruction} />
      { ludumDare && <Widget game={p.ludumDare} /> }
    </div>
  )
}

export default Game
