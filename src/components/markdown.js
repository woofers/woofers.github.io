import remark from 'remark'
import remark2react from 'remark-react'
import unist from 'unist-builder'
import visit from 'unist-util-visit'
import filter from 'unist-util-filter'
import { selectAll, select } from 'unist-util-select'
import { toGitHubLink } from 'utils/link'
import github from 'hast-util-sanitize/lib/github'
import merge from 'lodash.merge'
import highlight from 'remark-highlight.js'
import Link from 'link'
import { styled } from 'emotion'
import { css } from '@emotion/react'

const schema = merge(github, { attributes: { '*': ['className', 'type'] } })

const Wrapper = styled.div`
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
    options = options || {}
    const visitor = node => {
      const githubLink = /^\.\//g
      const setAlt = alt => {
        node.title = alt
        node.alt = alt
      }
      if (githubLink.test(node.url)) {
        node.url = toGitHubLink(node.url, p.repo.name)
      }
      if (options.alt) {
        setAlt(options.alt)
      }
      else if (node.title && node.type === 'image') {
        setAlt(`${p.repo.fullName} ${node.title}`)
      }
    }
    return (tree) => visit(tree, ['image', 'link', 'linkReference'], visitor)
  }
  const content = () => {
    let md = remark().use(remark2react, {
      remarkReactComponents: {
        a: p => <Link href={p.href} underline>{p.children}</Link>
      },
      sanitize: schema
    }).use(highlight)
    md = md.use(() => links({ alt: p.alt }))
    for (const filter of p.filters) {
      md = md.use(filter)
    }
    return md.processSync(p.content).result
  }
  return (
    <Wrapper>
      {content()}
    </Wrapper>
  )
}

Markdown.defaultProps = {
  filters: [],
  repo: '',
  centerImages: true
}
