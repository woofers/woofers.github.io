import React from 'react'
import Link from 'gatsby-link'
import FA from 'react-fontawesome'
import { css } from 'emotion'
import { colours } from './globals'
import 'font-awesome/css/font-awesome.min.css';

const active = css(`
  font-weight: bold;
`)

const font = css(`
  color: ${colours.text};
`)

export const Separator = p => (
  <FA style={{ margin: '0 7px 5px' }} name={p.icon ? p.icon : 'chevron-right'} />
)

export const Breadcrumb = p => {
  const depth = p.links.length
  return (
    <nav aria-label="breadcrumbs" className={font}>
      {p.links
        ? p.links.map(({ name, link }, i) => {
          if (depth <= i + 1) {
            return (
              <span className={active} key={i} aria-current='page'>{name}</span>
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
