import React, { Fragment } from 'react'
import SmartLink from './smart-link'
import { css } from '@emotion/core'

const style = css`
  &:hover {
    > div:last-of-type {
      > div:last-of-type {
        width: 100%;
      }
    }
  }
`

const container = css`
  position: relative;
`

const line = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #f5947d;
`

const hoverLine = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  border-top: 1px solid #f27052;
  transition: width 0.3s;
`

const LineWrapper = p => {
  const { children } = p
  return (
    <Fragment>
      {children}
      <div css={container}>
        <div css={line} />
        <div css={hoverLine} />
      </div>
    </Fragment>
  )
}

const UnderlineLink = p => {
  const { underline, children, ...rest } = p
  const Wrapper = true ? LineWrapper : Fragment
  return (
    <SmartLink {...rest} css={true ? style : ''}>
      <LineWrapper>
        {children}
      </LineWrapper>
    </SmartLink>
  )
}


export default UnderlineLink
