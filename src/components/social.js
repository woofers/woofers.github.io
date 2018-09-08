import React from 'react'
import { css } from 'emotion'
import FA from 'react-fontawesome'
import { margins } from './globals'

const socialEntryStyle = css(`
    margin: 0 ${margins.sm}px 0 0;
    border: none;
    font-size: 24px;
`)

export const SocialEntry = p => (
  <a
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    className={socialEntryStyle}
    role="button"
  >
    <FA name={p.iconName} size={p.size} />
    {p.children || null}
  </a>
)

export const Social = p => (
  <div>
    {p.socialEntries.map(({ link, name }) => (
      <SocialEntry href={link} iconName={name} key={name} />
    ))}
  </div>
)
