import React from 'react'
import { styled, Typography, Flex } from 'jxsn'

const GameIcon = styled('img', {
  userSelect: 'none',
  position: 'absolute',
  left: '4px',
  margin: 0,
  variants: {
    iconType: {
      normal: {
        borderRadius: '0 !important'
      }
    }
  }
})

const IconWrapper = styled('div', {
  position: 'relative',
  overflow: 'visible'
})

const GameTitle = p => {
  const { children, title, icon, iconMode, iconType, iconSize, ...rest } = p
  return (
    <Flex {...rest} justify="end">
      <Typography type="h4" as="h1">
        {title}
      </Typography>
      {icon && (
        <IconWrapper css={{ width: `${iconSize}px` }}>
          <GameIcon
            src={icon}
            alt=""
            draggable="false"
            css={{
              bottom: `${iconSize / 4}px`,
              imageRendering: iconMode,
              width: `${iconSize}px`,
              height: `${iconSize}px`
            }}
            iconType={iconType}
          />
        </IconWrapper>
      )}
      {children}
    </Flex>
  )
}

GameTitle.defaultProps = {
  iconSize: 45
}

export default GameTitle
