import React, { useState, Children, useEffect, useRef } from 'react'
import js from 'highlight.js/lib/languages/javascript'
import { lowlight } from 'lowlight'
import { toHtml } from 'hast-util-to-html'
import Content from './content'

const CodeBlock = ({ children, ...rest }) => {
  const flat = Children.map(children, el => el)
  const first = flat?.[0]
  const lang = (first?.props?.className || 'language-jsx').replace(
    /language\-/g,
    ''
  )
  const child = first?.props?.children?.[0]
  const [id, setId] = useState()
  useEffect(() => {
    setId(true)
  }, [setId])
  return (
    <pre>
      <Content
        className={`hljs language-${lang}`}
        as="code"
        html={toHtml(lowlight.highlight(id ? lang : 'c', child))}
      />
    </pre>
  )
}

export default CodeBlock
