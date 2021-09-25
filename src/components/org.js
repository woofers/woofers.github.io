import { useState, useEffect } from 'react'
import toHast from 'oast-to-hast'
import { toHtml } from 'hast-util-to-html'
import { parse as orga } from 'orga'
import { toGitHubLink } from 'utils/link'
import Content from './content'
import reorg from '@orgajs/reorg'
import stream from 'unified-stream'
import mutate from '@orgajs/reorg-rehype'
import html from 'rehype-stringify'
import parse from '@orgajs/reorg-parse'
import { unified } from 'unified'
import reorg2rehype from '@orgajs/reorg-rehype'
import { visit } from 'unist-util-visit'
import highlight from '@orgajs/reorg-shiki'

const t = name => () => {
  const visitor = node => {
    const githubLink = /^\.\//g
    if (githubLink.test(node.path.value)) {
      node.path.value = toGitHubLink(node.path.value, name)
    }
  }
  return tree => visit(tree, node => node.type === 'link', visitor)
}

const noop = () => out => out

const getContent = async (repo, content) => {
  const processor = unified()
    .use(parse)
    .use(repo?.name ? t(repo.name) : noop)
    .use(mutate)
    .use(html)
  const data = await processor.process(content)
  return data
}

const Org = ({ content, repo }) => {
  const [data, setData] = useState()
  useEffect(() => {
    const load = async () => {
      const d = await getContent(repo, content)
      setData(d)
    }
    load()
  }, [repo, content])
  return (
    <div>
      <Content html={data?.value} />
    </div>
  )
}

export default Org
