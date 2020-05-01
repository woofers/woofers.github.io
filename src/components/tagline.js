import React from 'react'
import { Typer, TyperElement } from 'react-yat'

const Tagline = p => (
  <h4>
    <Typer prefix="I" cursorWidth={3.9}>
      <TyperElement>build games <span role="img" aria-label="controller">🎮</span></TyperElement>
      <TyperElement>design apps <span role="img" aria-label="paintbrush">🖌</span></TyperElement>
      <TyperElement>craft tools <span role="img" aria-label="wrench">🔧</span></TyperElement>
    </Typer>
  </h4>
)

export default Tagline
