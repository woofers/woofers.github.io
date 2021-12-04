import React from 'react'
import { css } from '@emotion/react'
import image from '../images/jaxson.webp'

const Avatar = p => {
  const { size, fallback, ...rest } = p
  const style = theme => css`
    background: ${fallback};
    background-image: url(${image});
    background-position: 100% 50%;
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
