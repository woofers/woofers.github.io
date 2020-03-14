import React from 'react'
import P8 from 'react-pico-8'
import { withTheme } from 'emotion-theming'

const Pico8 = p => (
  <P8 {...p} />
)

Pico8.defaultProps = {
  center: true
}

export default withTheme(Pico8)
