import React from 'react'
import { css } from 'emotion'
import FA from 'react-fontawesome'
import { margins, fonts } from './globals'

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
    <FA name={p.iconName} size={p.size} ariaLabel={p.title} />
    {p.children || null}
  </a>
)

export const Social = p => (
  <div>
    {p.socialEntries.map(({ link, icon, name }) => (
      <SocialEntry href={link} iconName={icon} key={icon} title={name} />
    ))}
  </div>
)
