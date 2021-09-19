import toHast from 'oast-to-hast'
import {toHtml} from 'hast-util-to-html'
import { parse as orga } from 'orga'
import { toGitHubLink } from 'utils/link'
import Content from './content'
//import reorg from '@orgajs/reorg'
//import stream from 'unified-stream'
//import mutate from '@orgajs/reorg-rehype'
//import html from 'rehype-stringify'


const Org = p => {
  //const processor = reorg().use(mutate).use(html)
  const parse = content => {
    const ast = orga(content)
    const hast = toHast(ast, { highlight: true })
    return toHtml(hast, { allowDangerousHtml: true })
  }

    //console.log(processor.processSync(p.content).result)
  return (
    <div>
      <Content html={parse(p.content)} />
    </div>
  )
}

export default Org
