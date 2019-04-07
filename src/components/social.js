import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const socialEntryStyle = theme => css`
  margin: 0 ${theme.margins.items} 0 0;
  border: none !important;
  font-size: ${theme.fonts.social};
  color: ${theme.colors.footerElements} !important;
`

export const SocialEntry = p => (
  <a
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    css={socialEntryStyle}
    title={p.title}
  >
    <Icon icon={p.iconName} size={p.size} aria-label={p.title} aria-hidden="false" />
    {p.children || null}
  </a>
)

export const Social = p => (
  <div>
    {p.socialEntries.map(({ link, icon, name }) => (
      <SocialEntry href={link} iconName={icon} key={`${name}-${icon}`} title={name} />
    ))}
  </div>
)
