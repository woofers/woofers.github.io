import React, { useState, Children, useEffect } from 'react'
import lowlight from 'utils/lowlight'
import { toHtml } from 'hast-util-to-html'
import Content from './content'

const exclude = ['npm', 'yarn']

const CodeBlock = ({ children, ...rest }) => {
  const flat = Children.map(children, el => el)
  const first = flat?.[0]
  const name = first?.props?.className || 'language-jsx'
  const parse = name.replace(/language-/g, '')
  const lang = exclude.indexOf(parse) < 0 ? parse : 'jsx'
  const child = first?.props?.children?.[0]
  const [id, setId] = useState()
  useEffect(() => {
    setId(true)
  }, [setId])
  return (
    <pre {...rest}>
      <Content
        className={`hljs language-${lang}`}
        as="code"
        html={toHtml(lowlight.highlight(id ? lang : 'c', child))}
      />
    </pre>
  )
}

export default CodeBlock
