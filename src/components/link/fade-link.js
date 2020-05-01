import React from 'react'
import Link from './gen-link'

const FadeLink = p => (
  <Link {...p} />
)

FadeLink.defaultProps = {
  offset: 2,
  fade: true,
  duration: 0.3,
  direction: 'left',
  top: 'exit'
}

export default FadeLink
