import React from 'react'
import { Typer, TyperElement } from 'react-yat'
import Emoji from './emoji'

const Tagline = p => (
  <h4>
    <Typer prefix="I" cursorWidth={3.9}>
      <TyperElement>build games <Emoji size="16px" role="img" aria-label="controller" emoji="🎮" /></TyperElement>
      <TyperElement>design apps <Emoji size="16px" role="img" aria-label="paintbrush" emoji="🖌" /></TyperElement>
      <TyperElement>craft tools <Emoji size="16px" role="img" aria-label="wrench" emoji="🔧" /></TyperElement>
    </Typer>
  </h4>
)

export default Tagline
