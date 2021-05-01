import React from 'react'
import { css } from '@emotion/react'


const EmptyIcon = () => null
const IconBox = p => {
  const { children, icon: Icon, top, width, height, right,
          marginRight, marginLeft, marginTop, marginBottom, display, ...rest } = p
  const style = css`
    display: ${display};
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
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
  right: '1px',
  display: 'inline-block',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0
}

export default IconBox
