import React, { useEffect, useState } from 'react'
import CodeBlock from './code-block'
//import unist from 'unist-builder'
import { visit } from 'unist-util-visit'
import { filter } from 'unist-util-filter'
//import { selectAll, select } from 'unist-util-select'
import { toGitHubLink } from 'utils/link'
//import github from 'hast-util-sanitize/lib/github'
//import merge from 'lodash.merge'
import Link from 'link'
import { styled } from 'emotion'
import { css } from '@emotion/react'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import remarkGithub from 'remark-github'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import javascript from 'highlight.js/lib/languages/javascript'

function attacher({ include, exclude, prefix } = {}) {
  //return (ast) => visit(ast, 'code', visitor)
  //function visitor(node) {
  //  let {lang, data} = node
  //  if (
  //    !lang ||
  //    (include && !include.includes(lang)) ||
  //    (exclude && exclude.includes(lang))
  //  ) {
  //    return
  //  }
  //  if (!data) {
  //    data = {}
  //    node.data = data
  //  }
  //  if (!data.hProperties) {
  //    data.hProperties = {}
  //  }
  //  data.hChildren = low.highlight(lang, node.value, {prefix: 'hljs-'}).children
  //  data.hProperties.className = [
  //    'hljs',
  //    ...(data.hProperties.className || []),
  //    'language-' + lang
  //  ]
  //  console.log(node)
  //}
}

//const schema = merge(github, { attributes: { '*': ['className', 'type'] } })

const Wrapper = styled.div`
  h1:first-of-type {
    display: none;
  }
`

//export const onlyImages = () => {
//  return (tree) => unist('paragraph', selectAll('image', tree))
//}
//
//export const firstImage = () => {
//  return (tree) => {
//    const image = select('image', tree)
//    return image ? image : unist('paragraph', '')
//  }
//}

export const removeBadges = () => {
  return tree => {
    return filter(tree, node => {
      const child = node.children ? node.children[0] : ''
      return !(node.tagName === 'a' && child && child.tagName === 'img')
    })
  }
}

export const Markdown = p => {
  const links = options => {
    options = options || {}
    const visitor = node => {
      const githubLink = /^\.\//g
      const setAlt = alt => {
        node.properties.title = alt
        node.properties.alt = alt
      }
      if (githubLink.test(node.properties.src)) {
        node.properties.src = toGitHubLink(node.properties.src, p.repo.name)
      }
      if (options.alt) {
        setAlt(options.alt)
      } else if (node.title && node.type === 'image') {
        setAlt(`${p.repo.fullName} ${node.title}`)
      }
    }
    return tree => visit(tree, node => node.tagName === 'img', visitor)
  }
  const content = () => {
    let processor = unified()
      .use(remarkParse)
      .use(remarkSlug)
      .use(remarkToc)
      .use(remarkGithub, { repository: `woofers/${p.repo.name}` })
      .use(remarkRehype)
      .use(rehypeReact, {
        createElement: React.createElement,
        components: {
          pre: CodeBlock,
          a: p => (
            <Link href={p.href} underline>
              {p.children}
            </Link>
          ),
        },
      })
    processor = processor.use(() => links({ alt: p.alt }))
    for (const filter of p.filters) {
      processor = processor.use(filter)
    }
    return processor.processSync(p.content).result
  }
  return <Wrapper>{content()}</Wrapper>
}

Markdown.defaultProps = {
  filters: [],
  repo: '',
  centerImages: true,
}
