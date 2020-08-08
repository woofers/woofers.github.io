import React from 'react'
import { css } from '@emotion/core'

const Avatar = p => {
  const { size, ...rest } = p
  const style = theme => css`
    > img {
      border-radius: 50%;
      border: 1.5px solid ${theme.colors.text.light};
    }
    width: ${size};
    height: ${size};
    min-width: ${size};
    min-height: ${size};
    user-select: none;
  `
  return (
    <div css={style} {...rest}>
      <img src="https://avatars3.githubusercontent.com/u/7284672?s=260&v=4"
        alt="Jaxson Van Doorn"
        draggable="false"
      />
    </div>
  )
}

Avatar.defaultProps = {
  size: '90px'
}

export default Avatar
