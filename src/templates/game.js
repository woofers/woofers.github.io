import React from 'react'
import { graphql } from 'gatsby'
import Game from '../components/game'
import Page from '../components/page'
import SEO from '../components/seo'
import GameTitle from '../components/game-title'

const GameTemplate = p => {
  const { data } = p
  const { orgContent } = data
  const { metadata, html } = orgContent
  const { title, icon, landscape, lang, game, placeholder } = metadata
  const iconMode = metadata.icon_mode
  const iconType = metadata.icon_type
  const ludumDare = metadata.ludum_dare
  return (
    <Page>
      <SEO title={title} />
      <GameTitle title={title} icon={icon} iconMode={iconMode} iconType={iconType} />
      <Game title={title} src={game}
            portrait={landscape === 'nil'}
            instruction={html}
            lang={lang}
            ludumDare={ludumDare}
            placeholder={placeholder} />
    </Page>
  )
}

export default GameTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    orgContent(slug: {eq: $slug}) {
      ...Content
    }
  }
`
