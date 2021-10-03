import React from 'react'
import { styled } from 'emotion'
import Frame from './frame'
import Pico8 from './pico-8'
import Widget from '@ludum-dare-badges/react'
import { Markdown } from 'components/markdown'

const Wrapper = styled.div`
  ${props =>
    props.portrait &&
    `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(0px, 463px));
    grid-column-gap: 50px;
    grid-row-gap: 6px;
    justify-content: center;
  `}
`

const Game = p => {
  const { portrait, lang, title, src, instruction, ludumDare, placeholder } = p
  const isPico = lang === 'pico'
  return (
    <Wrapper portrait={portrait && !isPico}>
      {isPico ? (
        <Pico8 src={src} placeholder={placeholder} />
      ) : (
        <Frame
          aspectRatio={portrait ? 9 / 16 : 16 / 9}
          title={title}
          src={src}
        />
      )}
      <Markdown content={instruction} />
      {ludumDare && <Widget game={p.ludumDare} />}
    </Wrapper>
  )
}

export default Game
