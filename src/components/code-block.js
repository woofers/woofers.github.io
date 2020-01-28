import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

const CodeBlock = p => {
  const ref = useRef()
  useEffect(() => {
    const code = () => ref.current.children[0]
    const lang = code().className
    if (lang) Prism.highlightElement(code(), false)
    ref.current.removeAttribute('class')
  })
  return (
    <pre ref={ref}>{p.children}</pre>
  )
}

export default CodeBlock
