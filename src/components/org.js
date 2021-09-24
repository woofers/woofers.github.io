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

const Org = ({ content, repo }) => {
  const processor = unified()
    .use(parse)
    .use(repo?.name ? t(repo.name) : noop)
    .use(mutate)
    .use(html)
  return (
    <div>
      <Content html={processor.processSync(content).value} />
    </div>
  )
}

export default Org
