import React from 'react'

const Title = p => {
  const { children, ...rest } = p
  return (
    <h1 {...rest}>
      {children}
    </h1>
  )
}

export default Title
