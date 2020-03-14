import React from 'react'
import RotatingText from './rotating-text'

const speed = 65
const deleteSpeed = speed - 10
const stop = 3000
const emptyStop = 500

const data = [
  'build games 🎮',
  'design apps 🖌',
  'craft tools 🔧'
]

const Tagline = p => (
  <h4>
    I{' '}
    <RotatingText items={data}
      typingInterval={speed}
      deletingInterval={deleteSpeed}
      emptyPause={emptyStop}
      pause={stop}
    />
  </h4>
)

export default Tagline
