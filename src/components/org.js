import React from 'react'
import toHast from 'oast-to-hast'
import hastToHtml from 'hast-util-to-html'
import { parse as orga } from 'orga'
import { Content } from './content'
import { toGitHubLink } from '../utils/link'
import u from 'unist-builder'
import { css } from '@emotion/core'
import { image as center } from '../styles/center'

const image = css`
  img {
    ${center};
  }
`

const Org = p => {
  const parse = content => {
    const link = (h, node) => {
      const { uri, desc } = node
      const props = { href: uri.raw }
      if (uri.protocol === 'file') {
         uri.raw = toGitHubLink(uri.raw, p.repo.name)
         return h(node, 'img', { src: uri.raw, alt: desc })
      }
      return h(node, `a`, props, [u(`text`, desc)])
    }
    const ast = orga(content)
    const hast = toHast(ast, { highlight: true, handlers: { link } })
    return hastToHtml(hast, { allowDangerousHTML: true })
  }
  return (
    <div css={image}>
      <Content html={parse(p.content)} />
    </div>
  )
}

export default Org