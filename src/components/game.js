import React from 'react'
import { styled } from 'jxsn'
import Frame from './frame'
import Pico8 from './pico-8'
import Widget from '@ludum-dare-badges/react'
import Markdown from 'components/markdown'

const Wrapper = styled('div', {
  variants: {
    orientation: {
      portrait: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(0px, 463px))',
        gridColumnGap: '50px',
        gridRowGap: '6px',
        justifyContent: 'center'
      },
      landscape: {}
    }
  }
})

const Game = p => {
  const { portrait, lang, title, src, instruction, ludumDare, placeholder } = p
  const isPico = lang === 'pico'
  return (
    <Wrapper orientation={portrait && !isPico ? 'portrait' : 'landscape'}>
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
