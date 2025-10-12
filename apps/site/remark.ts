import rehypeShikiFromHighlight from '@shikijs/rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { filter } from 'unist-util-filter'
import type { MDXOptions } from 'contentlayer2/core'
import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'
import rehypeExtractToc from '@stefanprobst/rehype-extract-toc'
import rehypeExtractTocMdx from '@stefanprobst/rehype-extract-toc/mdx'

const createHighlighter = async () => {
  const highlighter = await createHighlighterCore({
    themes: [import('@shikijs/themes/github-dark')],
    langs: [import('@shikijs/langs/typescript'), import('@shikijs/langs/javascript'), import('@shikijs/langs/tsx'), import('@shikijs/langs/jsx'), import('@shikijs/langs/yaml')],
    engine: createOnigurumaEngine(() => import('shiki/wasm'))
  })
  return highlighter
}

export const removeBadges = () => {
  return (tree: any) => {
    return filter(tree, (node: any) => {
      const child = node.children ? node.children[0] : ''
      return !(node.type === 'link' && child && child.type === 'image')
    })
  }
}

export const remarkPlugins = [
  //remarkGfm,
  removeBadges
] satisfies MDXOptions['remarkPlugins']

type RehypePlugins = NonNullable<MDXOptions['rehypePlugins']>

type RehypePlugin = RehypePlugins[number]

const rehypeAutolinkHeadingsPlugin = [
  rehypeAutolinkHeadings,
  {
    properties: {
      className: ['anchor']
    }
  }
] as RehypePlugin

export const rehypePlugins: RehypePlugins = [
  rehypeSlug,
  [rehypeShikiFromHighlight, {
    themes: {
      light: 'github-light',
      dark: 'catppuccin-mocha'
    },

  }],
  rehypeAutolinkHeadingsPlugin,
  rehypeExtractToc as RehypePlugin,
  rehypeExtractTocMdx as RehypePlugin
] 
