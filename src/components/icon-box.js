import React from 'react'
import { css } from '@emotion/react'

const EmptyIcon = () => null

const IconBox = p => {
  const { children, icon: Icon, top, right, ...rest } = p
  const style = css`
    display: inline-block;
    > svg {
      position: relative;
      top: ${top};
      right: ${right};
    }
  `
  return (
    <div css={style} {...rest}>
      <Icon />{children}{' '}
    </div>
  )
}

IconBox.defaultProps = {
  icon: EmptyIcon,
  top: '2px',
  right: '1px'
}

export default IconBox
