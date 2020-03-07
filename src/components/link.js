import React from 'react'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Link = p => {
  const { fade, cover, ...rest } = p
  return (
    <AniLink fade={!cover} cover={cover} {...rest} />
  )
}

export default Link
