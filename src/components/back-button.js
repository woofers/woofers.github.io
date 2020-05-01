import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Button from './icon-button'
import withLocation from './with-location'

const back = path => {
  const noSlash = path.replace(/\/$/, '')
  const upNoSlash = noSlash.substring(0, noSlash.lastIndexOf('/'))
  const up =  upNoSlash + '/'
  if (up === '/projects/') return '/'
  return up
}

const BackButton = p => {
  const { location, children, to, ...rest } = p
  const { pathname } = location
  const href = to || back(pathname)
  return (
    <Button duration={0.5}
      icon={IoMdArrowRoundBack}
      to={href}
      {...rest}
    >
      {children} Back
    </Button>
  )
}

export default withLocation(BackButton)
