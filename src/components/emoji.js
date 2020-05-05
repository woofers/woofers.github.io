import React from 'react'
import { css } from '@emotion/core'
import {
  Fox,
  Whale,
  DogFace,
  Snake,
  WaterWave,
  DesertIsland,
  GameDie,
  Joystick,
  AlienMonster,
  Trophy,
  ManAstronaut,
  Telescope,
  MilkyWay,
  Cyclone,
  InputLatinUppercase,
  Scroll,
  ComputerMouse,
  SpeechBalloon,
  VideoGame,
  Paintbrush,
  Wrench
} from 'noto-emoji-react'

const table = {
  '🦊': Fox,
  '🐋': Whale,
  '🐶': DogFace,
  '🐍': Snake,
  '🌊': WaterWave,
  '🏝': DesertIsland,
  '🎲': GameDie,
  '🕹': Joystick,
  '👾': AlienMonster,
  '🏆': Trophy,
  '👨‍🚀': ManAstronaut,
  '🔭': Telescope,
  '🌌': MilkyWay,
  '🌀': Cyclone,
  '🔠': InputLatinUppercase,
  '📜': Scroll,
  '🖱': ComputerMouse,
  '💬': SpeechBalloon,
  '🎮': VideoGame,
  '🖌': Paintbrush,
  '🔧': Wrench
}

const img = code => `//github.githubassets.com/images/icons/emoji/unicode/${code}.png`
const border = css`
  border-radius: 0 !important;
  margin-bottom: 0;
`

const Emoji = p => {
  const { emoji, size, children, ...rest } = p
  const noVs = unescape(escape(emoji).replace('%uFE0F', ''))
  const Icon = table[noVs]
  if (Icon) return <Icon {...rest} width={size} height={size} />
  return <img alt="" css={border} width={size} height={size} src={img(noVs.codePointAt(0).toString(16).toLowerCase())} />
}

Emoji.defaultProps = {
  emoji: '👾',
  size: '20px'
}

export default Emoji
