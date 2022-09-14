import React, { Children } from 'react'
import { visit } from 'unist-util-visit'
import { filter } from 'unist-util-filter'
import { toGitHubLink } from 'utils/link'
import { MarkdownLink } from 'link'
import { styled, Typography } from 'jxsn'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remarkGithub from 'remark-github'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import remarkFrontmatter from 'remark-frontmatter'
import CodeBlock from '../code-block'

const CodeList = styled('span', {
  display: 'inline-block',
  my: '8px'
})

const Wrapper = styled('div', {
  'h1:first-of-type': {
    display: 'none'
  },
  '> div:first-of-type': {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px 0',
    img: {
      margin: '0 auto'
    }
  }
})

const Dash = styled('span', {
  mr: '$2'
})

const noop = value => item => item

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

export const summary = () => tree => {
  const text = tree?.children?.find(el => el.tagName === 'p')
  if (text) tree.children = [text]
}

export const removeBadges = () => {
  return tree => {
    return filter(tree, node => {
      const child = node.children ? node.children[0] : ''
      return !(node.tagName === 'a' && child && child.tagName === 'img')
    })
  }
}

const applyFilters = {
  links,
  summary,
  removeBadges
}

const Markdown = ({ content: md, options }) => {
  const { content } = useMarkdown(md, options)
  return <Wrapper>{content}</Wrapper>
}

export default Markdown

const parseMeta = meta => {
  const parts = meta.split('\n')
  return parts
    .map(part => part.split(': '))
    .reduce((acc, [key, value]) => {
      return { ...acc, [key]: value }
    }, {})
}

const Block = ({ children, ...props }) => {
  const count = Children.count(children)
  const isNone = count === 0
  if (isNone) return null
  const items = Children.map(children, child => child)
  const onlyImages =
    !items.some(item => typeof item === 'object' && item.type !== 'img') &&
    items[0].type === 'img'
  const onlyCode =
    !items.some(item => typeof item !== 'object' || item.type !== 'code') &&
    items[0].type === 'code'
  if (onlyImages) return <>{children}</>
  if (onlyCode) return <CodeList>{children}</CodeList>
  return (
    <Typography type="body1" {...props} as="p">
      {children}
    </Typography>
  )
}

const useMarkdown = (data, { repo = '', alt = '', filters = [] } = {}) => {
  const hasRepo = !!repo
  let meta = {}
  let processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .use(() => tree => {
      const first = tree?.children?.[0]
      if (first?.type === 'yaml') meta = parseMeta(first.value)
    })
    .use(remarkSlug)
    .use(hasRepo ? remarkGithub : noop, { repository: `woofers/${repo?.name}` })
    .use(remarkRehype)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        pre: CodeBlock,
        h1: props => <Typography type="h4" {...props} as="h1" />,
        h2: props => <Typography type="h5" {...props} as="h2" />,
        h3: props => <Typography type="h6" {...props} as="h3" />,
        h4: props => <Typography type="h6" {...props} as="h4" />,
        h5: props => <Typography type="h6" {...props} as="h5" />,
        h6: props => <Typography type="h6" {...props} as="h6" />,
        p: Block,
        li: ({ children, ...rest }) => {
          return (
            <Typography type="body1" as="li" {...rest}>
              <Dash aria-hidden>-</Dash>
              {children}
            </Typography>
          )
        },
        a: ({ href, children }) => (
          <MarkdownLink href={href}>{children}</MarkdownLink>
        )
      }
    })
  processor = processor.use(() => links({ alt, repo }))
  for (const key of filters) {
    const filter = applyFilters[key]
    processor = processor.use(filter)
  }
  const content = processor.processSync(data).result
  return { content, meta }
}
