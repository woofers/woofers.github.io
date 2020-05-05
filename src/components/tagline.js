import React from 'react'
import { Typer, TyperElement } from 'react-yat'
import Emoji from './emoji'

const Tagline = p => (
  <h4>
    <Typer prefix="I" cursorWidth={3.9}>
      <TyperElement>build games <Emoji role="img" aria-label="controller">🎮</Emoji></TyperElement>
      <TyperElement>design apps <Emoji role="img" aria-label="paintbrush">🖌</Emoji></TyperElement>
      <TyperElement>craft tools <Emoji role="img" aria-label="wrench">🔧</Emoji></TyperElement>
    </Typer>
  </h4>
)

export default Tagline
