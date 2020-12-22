import React from 'react'
import { css } from '@emotion/react'

const GameTitle = p => {
  const { children, title, icon, iconMode, iconType, iconSize, ...rest } = p
  const wrapper = css`
    margin: 0 0 15px 0;
  `
  const header = css`
    display: ${icon ? 'inline' : 'block'};
  `
  const noRounded = css`
    border-radius: 0 !important;
  `
  const gameIcon = css`
    user-select: none;
    position: relative;
    bottom: ${iconSize / 4}px;
    left: 4px;
    ${iconType === 'normal' ? noRounded : ''}
    image-rendering: ${iconMode};
    width: ${iconSize}px;
    height: ${iconSize}px;
    margin: 0;
  `
  const abs = css`
    position: absolute;
  `
  return (
    <div css={wrapper} {...rest}>
      <h1 css={header}>{title}</h1>
      {
        icon &&
          <span css={abs}>
            <img css={gameIcon} src={icon} alt="" draggable="false" />
          </span>
      }
      {children}
    </div>
  )
}

GameTitle.defaultProps = {
  iconSize: 45
}

export default GameTitle
