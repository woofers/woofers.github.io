import React from 'react'
import { css } from '@emotion/core'
import Button from './button'

const EmptyIcon = () => {}

const style = css`
  > svg {
    position: relative;
    top: 2px;
    right: 1px;
  }
`

const IconButton = p => {
  const { children, icon: Icon, ...rest } = p
  return (
    <Button {...rest}>
      <div css={style}>
        <Icon />{' '}{children}
      </div>
    </Button>
  )
}

IconButton.defaultProps = {
  icon: EmptyIcon
}

export default IconButton
