import React, { useEffect, useRef } from 'react'
import 'prismjs'
import 'prismjs/components/prism-jsx'

const CodeBlock = p => {
  const ref = useRef()
  useEffect(() => {
    const code = () => ref.current.children[0]
    const lang = code().className
    if (lang === 'language-js') {
      code().className = `${lang}x`
    }
    if (lang) window.Prism.highlightElement(code(), false)
    ref.current.removeAttribute('class')
  })
  return (
    <pre ref={ref}>{p.children}</pre>
  )
}

export default CodeBlock
