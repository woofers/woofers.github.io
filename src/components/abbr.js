import React from 'react'
import { css } from '@emotion/react'

const style = css`
  border-bottom: none !important;
  text-decoration: none;
`

const help = css`
  cursor: help;
`

const Abbr = p => {
  const { title, children, cursor, ...rest } = p
  return (
    <abbr css={[style, cursor ? help : '']} title={title} {...rest}>
      {children}
    </abbr>
  )
}

Abbr.defaultProps = {
  cursor: true
}

export default Abbr
