import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import { filter } from 'unist-util-filter'
import type { MDXOptions } from '@contentlayer/core'
import { readFileSync } from 'fs'
import path from 'path'

export const removeBadges = () => {
  return (tree: any) => {

    return filter(tree, (node: any) => {
      const child = node.children ? node.children[0] : ''
      return !(node.type === 'link' && child && child.type === 'image')
    })
  }
}

export const remarkPlugins = [remarkGfm, removeBadges] satisfies MDXOptions["remarkPlugins"]

export const rehypePlugins = [
  rehypeSlug,
  [
    rehypePrettyCode,
    {
      theme: JSON.parse(readFileSync('./themes/dark.json', 'utf-8')),
      onVisitLine(node: any) {
        if (node.children.length === 0) {
          node.children = [{ type: 'text', value: ' ' }];
        }
      },
      onVisitHighlightedLine(node: any) {
        node.properties.className.push('line--highlighted');
      },
      onVisitHighlightedWord(node: any) {
        node.properties.className = ['word--highlighted'];
      },
    },
  ],
  [
    rehypeAutolinkHeadings,
    {
      properties: {
        className: ['anchor'],
      },
    },
  ]
] satisfies MDXOptions["rehypePlugins"]
