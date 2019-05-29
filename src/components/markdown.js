import React from 'react'
import remark from 'remark'
import remark2react from 'remark-react'
import { css } from '@emotion/core'
import unist from 'unist-builder'
import visit from 'unist-util-visit'
import filter from 'unist-util-filter'
import { selectAll, select } from 'unist-util-select'
import { toGitHubLink } from '../utils/link'
import { image } from '../styles/center'

export const onlyImages = () => {
  return (tree) => unist('paragraph', selectAll('image', tree))
}

export const firstImage = () => {
  return (tree) => {
    const image = select('image', tree)
    return image ? image : unist('paragraph', '')
  }
}

export const removeBadges = () => {
  return (tree) => {
    return filter(tree, node => {
      const child = node.children ? node.children[0] : ''
      return !(node.type === 'link' && child && child.type === 'image')
    })
  }
}

export const Markdown = p => {
  const links = options => {
    const visitor = node => {
      const githubLink = /^\.\//g
      if (githubLink.test(node.url)) {
        node.url = toGitHubLink(node.url, p.repo.name)
      }
      if (node.title && node.type === 'image') {
        node.title = `${p.repo.fullName} ${node.title}`
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

  const centerImage = css`
    img:last-child {
      ${image};
    }
    img ~ img {
      display: inline !important;
    }
  `

  const style = theme => css`
    h1:first-of-type {
      display: none;
    }
    p img {
      margin-right: ${theme.margins.large};
      margin-bottom: ${theme.margins.normal};
    }
    ${p.centerImages ? centerImage : ''}
  `
  return (
    <div css={style}>
      {content()}
    </div>
  )
}

Markdown.defaultProps = {
  filters: [],
  centerImages: true
}
