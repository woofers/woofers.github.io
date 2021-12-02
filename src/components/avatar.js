import React from 'react'
import { css } from '@emotion/react'

const Avatar = p => {
  const { size, fallback, ...rest } = p
  const style = theme => css`
    background: ${fallback};
    background-image: url(https://avatars3.githubusercontent.com/u/7284672?s=260&v=4);
    transition: background-image 0.25s ease-in-out;
    width: ${size};
    height: ${size};
    background-size: 100%;
    border-radius: 35%;
    box-shadow: 0.3px -0.4px 0px 2px ${theme.colors.text.light};
    min-width: ${size};
    min-height: ${size};
  `
  return (
    <div css={style} role="img" {...rest} aria-label="Jaxson Van Doorn">
    </div>
  )
}

Avatar.defaultProps = {
  size: '90px',
  fallback: '#f58b71'
}

export default Avatar
