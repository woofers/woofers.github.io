import React from 'react'
import { styled, css } from 'emotion'

const Header = styled.h1`
  display: ${props => props.icon ? 'inline' : 'block'};
`

const GameIcon = styled.img`
  user-select: none;
  position: relative;
  bottom: ${props => props.iconSize / 4}px;
  left: 4px;
  ${props => props.iconType === 'normal' && `border-radius: 0 !important;`}
  image-rendering: ${props => props.iconMode};
  width: ${props => props.iconSize}px;
  height: ${props => props.iconSize}px;
  margin: 0;
`

const IconWrapper = styled.span`
  position: absolute;
`

const Wrapper = styled.div`
  margin: 0 0 15px 0;
`

const GameTitle = p => {
  const { children, title, icon, iconMode, iconType, iconSize, ...rest } = p
  return (
    <Wrapper {...rest}>
      <Header icon={icon}>{title}</Header>
      {
        icon &&
          <IconWrapper>
            <GameIcon src={icon} alt="" draggable="false" iconSize={iconSize} iconType={iconType} />
          </IconWrapper>
      }
      {children}
    </Wrapper>
  )
}

GameTitle.defaultProps = {
  iconSize: 45
}

export default GameTitle
