import React from 'react'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Link = p => {
  const { fade, cover, duration, ...rest } = p
  return (
    <AniLink fade={!cover} duration={!!duration ? duration : (!cover ? 0.2 : 0.8)} cover={cover} {...rest} />
  )
}

export default Link
