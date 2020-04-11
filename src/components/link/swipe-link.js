import React from 'react'
import Link from './gen-link'

const SwipeLink = p => (
  <Link {...p} />
)

SwipeLink.defaultProps = {
  duration: 0.8,
  direction: 'up',
  top: 'entry'
}

export default SwipeLink
