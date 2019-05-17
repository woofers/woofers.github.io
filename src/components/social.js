import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { useStaticQuery, graphql } from 'gatsby'
import { faGithub,
         faLinkedinIn as faLinkedin,
         faStackOverflow,
         faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const socialEntryStyle = theme => css`
  margin: 0 ${theme.margins.items} 0 0;
  border: none !important;
  font-size: ${theme.fonts.social};
  color: ${theme.colors.footerElements} !important;
`

const icons = {
  github: faGithub,
  stackoverflow: faStackOverflow,
  twitter: faTwitter,
  linkedin: faLinkedin,
  email: faEnvelope,
}

export const SocialEntry = p => (
  <OutboundLink
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    css={socialEntryStyle}
    title={p.title}
  >
    <Icon icon={p.iconName} size={p.size} aria-label={p.title} aria-hidden="false" />
    {p.children || null}
  </OutboundLink>
)

export const Social = p => {
  let { social } = useStaticQuery(graphql`{ ...Social }`).site.siteMetadata
  for (const key in social) {
    social[key].icon = icons[key]
  }
  return (
    <div>
      {Object.keys(social).map(key => {
        const { name, link, icon } = social[key]
        return (
          <SocialEntry href={link} iconName={icon} key={`${name}-${icon.iconName}`} title={name} />
        )
      })}
    </div>
  )
}
