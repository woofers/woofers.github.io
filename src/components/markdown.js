import React from 'react'
import remark from 'remark'
import remark2react from 'remark-react'
import { css } from '@emotion/core'
import unist from 'unist-builder'
import visit from 'unist-util-visit'
import { selectAll, select } from 'unist-util-select'

const edge = css`
  * {
    border-radius: 0 !important;
    border: none !important;
  }
  h1:first-of-type {
    display: none;
  }
`

export const onlyImages = () => {
  return (tree) => unist('paragraph', selectAll('image', tree))
}

export const firstImage = () => {
  return (tree) => {
    const image = select('image', tree)
    return image ? image : unist('paragraph', '')
  }
}

export const Markdown = p => {
  const links = options => {
    const visitor = node => {
      const githubLink = /^\.\//g
      if (githubLink.test(node.url)) {
        node.url = node.url.replace(githubLink, `//raw.githubusercontent.com/woofers/${p.repo}/master/`)
      }
    }
    return (tree) => visit(tree, ['image', 'link', 'linkReference'], visitor)
  }
  const content = () => {
    let md = remark().use(remark2react).use(links)
    for (const filter of p.filters) {
      md = md.use(filter)
    }
    return md.processSync(p.content).contents
  }
  return (
    <div css={edge}>
      {content()}
    </div>
  )
}

Markdown.defaultProps = {
  filters: []
}
