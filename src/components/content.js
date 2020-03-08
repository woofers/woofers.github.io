import React from 'react'
import 'prism-themes/themes/prism-duotone-space.css'

const Content = p => {
  const { html, ...rest } = p
  return (
    <div {...rest}
      dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Content
