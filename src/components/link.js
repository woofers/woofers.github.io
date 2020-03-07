import React from 'react'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Link = p => {

  return (
    <AniLink fade {...p} />
  )
}

export default Link
