import toHast from 'oast-to-hast'
import hastToHtml from 'hast-util-to-html'
import { parse as orga } from 'orga'
import { toGitHubLink } from 'utils/link'
import Content from './content'

const Org = p => {
  const parse = content => {
    const link =
      ({ h, u }) =>
      node => {
        const props = { href: node.value }
        if (node.protocol === 'file') {
          node.value = toGitHubLink(node.value, p.repo.name)
          return h('img', { src: node.value, alt: node.description })()
        }
        return h(`a`, props)(u(`text`, node.description))
      }
    const ast = orga(content)
    const hast = toHast(ast, { highlight: true, handlers: { link } })
    return hastToHtml(hast, { allowDangerousHtml: true })
  }

  return (
    <div>
      <Content html={parse(p.content)} />
    </div>
  )
}

export default Org
