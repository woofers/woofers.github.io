import toHast from 'oast-to-hast'
import {toHtml} from 'hast-util-to-html'
import { parse as orga } from 'orga'
import { toGitHubLink } from 'utils/link'
import Content from './content'
import reorg from '@orgajs/reorg'
import stream from 'unified-stream'
import mutate from '@orgajs/reorg-rehype'
import html from 'rehype-stringify'


const Org = p => {
  const processor = reorg().use(mutate).use(html)
  return (
    <div>
      <Content html={processor.processSync(p.content).contents} />
    </div>
  )
}

export default Org
