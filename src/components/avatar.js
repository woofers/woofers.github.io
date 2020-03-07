import React from 'react'
import { css } from '@emotion/core'

const style = css`
  > img {
    border-radius: 50%;
    border: 1.5px solid #fff;
  }
  width: 90px;
  height: 90px;
  user-select: none;
`

const Avatar = p => {
  return (
    <div css={style}>
      <img src="https://avatars3.githubusercontent.com/u/7284672?s=460&v=4"
        alt="Jaxson Van Doorn"
        draggable="false"
      />
    </div>
  )
}

export default Avatar
