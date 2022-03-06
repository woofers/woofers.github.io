import React from 'react'
import { styled } from 'ruffsponsive'
import Title from 'components/title'

const GameIcon = styled('img', {
  userSelect: 'none',
  position: 'relative',
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

const IconWrapper = styled('span', {
  position: 'absolute'
})

const Wrapper = styled('div', {
  padding: '20px 0'
})

const GameTitle = p => {
  const { children, title, icon, iconMode, iconType, iconSize, ...rest } = p
  return (
    <Wrapper {...rest}>
      <Title paddingX="0" paddingY="0" display={icon ? 'inline' : 'block'}>
        {title}
      </Title>
      {icon && (
        <IconWrapper>
          <GameIcon
            src={icon}
            alt=""
            draggable="false"
            css={{ bottom: `${iconSize / 4}px`, imageRendering: iconMode, width: `${iconSize}px`, height: `${iconSize}px` }}
            iconSize={iconSize}
            iconMode={iconMode}
            iconType={iconType}
          />
        </IconWrapper>
      )}
      {children}
    </Wrapper>
  )
}

GameTitle.defaultProps = {
  iconSize: 45,
}

export default GameTitle
