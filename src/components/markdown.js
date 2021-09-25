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
import remarkFrontmatter from 'remark-frontmatter'
import javascript from 'highlight.js/lib/languages/javascript'

const Wrapper = styled.div`
  h1:first-of-type {
    display: none;
  }
`

const noop = item => item => item

const links = (options = {}) => {
  const { alt, repo } = options
  const visitor = node => {
    const githubLink = /^\.\//g
    const setAlt = alt => {
      node.properties.title = alt
      node.properties.alt = alt
    }
    if (githubLink.test(node.properties.src)) {
      node.properties.src = toGitHubLink(node.properties.src, repo.name)
    }
    if (options.alt) {
      setAlt(alt)
    } else if (node.title && node.type === 'image') {
      setAlt(`${repo.fullName} ${node.title}`)
    }
  }
  return tree => visit(tree, node => node.tagName === 'img', visitor)
}


export const removeBadges = () => {
  return tree => {
    return filter(tree, node => {
      const child = node.children ? node.children[0] : ''
      return !(node.tagName === 'a' && child && child.tagName === 'img')
    })
  }
}

export const Markdown = ({ content, repo, alt, filters }) => {
  const hasRepo = !!repo
  const getContent = () => {
    let meta = {}
    let processor = unified()
      .use(remarkParse)
      .use(remarkFrontmatter, ['yaml'])
      .use(() => (tree) => {
        const first = tree?.children?.[0]
        if (first?.type === 'yaml') meta = first.value
      })
      .use(remarkSlug)
      .use(hasRepo ? remarkGithub : noop, { repository: `woofers/${repo?.name}` })
      .use(remarkRehype)
      .use(rehypeReact, {
        createElement: React.createElement,
        components: {
          pre: CodeBlock,
            a: ({ href, children }) => (
            <Link href={href} underline>
              {children}
            </Link>
          ),
        },
      })
    processor = processor.use(() => links({ alt, repo }))
    for (const filter of filters) {
      processor = processor.use(filter)
    }
    const data = processor.processSync(content).result
    return [data, meta]
  }
  const [data, meta] = getContent()
  console.log(meta)
  return (
    <Wrapper>{data}</Wrapper>
  )
}

Markdown.defaultProps = {
  filters: [],
  repo: '',
  centerImages: true,
}
