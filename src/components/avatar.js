import React from 'react'
import { css } from '@emotion/core'

const style = css`
  > img {
    border-radius: 50%;
    border: 2px solid #fff;
  }
  width: 60px;
  height: 60px;
  margin-right: 50px;
  margin-bottom: 25px;
`

const Avatar = p => {
  return (
    <div css={style}>
      <img src="https://avatars3.githubusercontent.com/u/7284672?s=460&v=4" alt="Jaxson Van Doorn" />
    </div>
  )
}

export default Avatar
