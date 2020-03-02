import React from 'react'
import Link from './smart-link'
import { css } from '@emotion/core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const active = css`
  font-weight: bold;
`

const font = theme => css`
  color: ${theme.colors.text};
`

const separator = theme => css`
  margin: 0 7px;
`

export const Separator = p => (
  <Icon css={separator} icon={p.icon ? p.icon : faChevronRight} />
)

export const Breadcrumb = p => {
  const depth = p.links.length
  return (
    <nav aria-label="breadcrumbs" css={font}>
      {p.links
        ? p.links.map(({ name, link }, i) => {
          if (depth <= i + 1) {
            return (
              <span css={active} key={i} aria-current='page'>{name}</span>
            )
          }
          return (
            <span key={i}>
              <Link to={link}>{name}</Link>
              <Separator icon={p.separator}/>
            </span>
          )
        }) : null}
    </nav>
  )
}
