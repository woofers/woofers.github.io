import React, { useEffect, useRef } from 'react'
import cloneDeep from 'lodash.clonedeep'
import 'prismjs'
import 'prismjs/components/prism-jsx'

const CodeBlock = p => {
  const children = cloneDeep(p.children)
  for (const child of children) {
    if (child.props.className) {
      child.props.className = child.props.className.trim()
      if (child.props.className === 'language-js') child.props.className += 'x'
    }
  }
  const ref = useRef()
  useEffect(() => {
    const code = () => ref.current.children[0]
    const lang = () => code().className
    if (lang()) window.Prism.highlightElement(code(), false)
    ref.current.removeAttribute('class')
  })
  return (
    <pre ref={ref}>{children}</pre>
  )
}

export default CodeBlock
