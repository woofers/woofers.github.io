import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SLink from './swipe-link'
import FLink from './fade-link'

export const FadeLink = p => {
  const { fade, cover, swipe, ...rest } = p
  return (
    <FLink fade {...rest} />
  )
}

FadeLink.defaultProps = {
  duration: 0.5,
  direction: 'left',
  top: 'entry'
}

export const SwipeLink = p => {
  const { fade, cover, swipe, ...rest } = p
  return (
    <SLink swipe {...rest} />
  )
}

SwipeLink.defaultProps = {
  duration: 0.8,
  direction: 'up',
  top: 'entry'
}
