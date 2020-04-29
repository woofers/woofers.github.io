import React from 'react'
import Button from './button'
import IconBox from './icon-box'

const IconButton = p => {
  const { children, icon, ...rest } = p
  return (
    <Button {...rest}>
      <IconBox icon={icon}>
        {children}
      </IconBox>
    </Button>
  )
}

export default IconButton
