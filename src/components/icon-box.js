import React from 'react'
import { css } from '@emotion/react'

const EmptyIcon = () => null

const IconBox = p => {
  const { children, icon: Icon, top, width, height, right, ...rest } = p
  const style = css`
    display: inline-block;
    > svg {
      position: relative;
      top: ${top};
      right: ${right};
      width: ${width};
      height: ${height};
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
  width: '1em',
  height: '1em',
  top: '2px',
  right: '1px'
}

export default IconBox
