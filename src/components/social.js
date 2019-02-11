import React from 'react'
import { css } from 'emotion'
import { margins, fonts } from './globals'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const socialEntryStyle = css(`
  margin: 0 ${margins.sm}px 0 0;
  border: none !important;
  font-size: ${fonts.social}em;
`)

export const SocialEntry = p => (
  <a
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    className={socialEntryStyle}
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
