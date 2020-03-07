import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Link from './swipe-link'

export const FadeLink = p => {
  const { fade, cover, swipe, ...rest } = p
  return (
    <AniLink fade {...rest} />
  )
}

FadeLink.defaultProps = {
  duration: 0.2
}

export const SwipeLink = p => {
  const { fade, cover, swipe, ...rest } = p
  return (
    <Link swipe {...rest} />
  )
}

SwipeLink.defaultProps = {
  duration: 0.8,
  top: 'entry'
}
