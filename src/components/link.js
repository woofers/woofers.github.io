import React from 'react'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const FadeLink = p => {
  const { fade, cover, ...rest } = p
  return (
    <AniLink fade {...rest} />
  )
}

FadeLink.defaultProps = {
  duration: 0.2
}

export const SwipeLink = p => {
  const { fade, cover, ...rest } = p
  return (
    <AniLink cover {...rest} />
  )
}

SwipeLink.defaultProps = {
  duration: 0.8
}
