import React from 'react'
import remark from 'remark'
import remark2react from 'remark-react'
import { css } from '@emotion/core'
import visit from 'unist-util-visit'

const edge = css`
  * {
    border-radius: 0 !important;
    border: none !important;
  }
  h1:first-of-type {
    display: none;
  }
`


const Markdown = p => {
  const links = options => {
    const visitor = node => {
      const githubLink = /^\.\//g
      if (githubLink.test(node.url)) {
        node.url = node.url.replace(githubLink, `//raw.githubusercontent.com/woofers/${p.repo}/master/`)
      }
    }
    return (tree) => visit(tree, ['image', 'link', 'linkReference'], visitor)
  }
  return (
    <div css={edge}>
      {
        remark()
          .use(remark2react)
          .use(links)
          .processSync(p.content).contents
      }
    </div>
  )
}

export default Markdown
