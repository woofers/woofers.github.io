import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Button from './icon-button'

const BackButton = p => {
  const { children, ...rest } = p
  return (
    <Button duration={0.5}
      icon={IoMdArrowRoundBack}
      {...rest}
    >
      {children} Back
    </Button>
  )
}

export default BackButton
