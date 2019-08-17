import React from 'react'

const LD = p => {
  const api = `https://badges.vandoorn.ca/${p.game}/badge.${p.type}`
  const name = p.game.substring(p.game.indexOf('/') + 1)
  return <img src={api} alt={`${name} Ludum Dare results`} />
}

LD.defaultProps = {
  type: 'svg'
}

export default LD
