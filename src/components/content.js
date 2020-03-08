import React from 'react'

const Content = p => {
  const { html, ...rest } = p
  return (
    <div {...rest}
      dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Content
