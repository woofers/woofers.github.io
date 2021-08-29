import React, { useState } from 'react'
import { styled, createGlobal, css } from 'emotion'
import { motion } from 'framer-motion'
import Title from './title'
import Text from './text'
import { setCSSVar, removeCSSVar } from 'utils/css-var'

const Wrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  display: inline-flex;
  &[data-hide='true'] {
    display: none;
  }
  &[data-open='true'] {
    cursor: default;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px;
  background: ${props => props.background || '#fff'};
  background-size: 100% auto;
  background-position: center;
  justify-content: space-between;
`

const Content = styled.div`
  pointer-events: none;
  width: calc(100% - 170px);
  height: calc(100% - 25px);
  display: flex;
  align-items: flex-end;
  justify-content: ${props => props.justifyContent};
`

const HideOverflow = createGlobal`
  body, #root-layout-wrapper {
    overflow-y: hidden;
  }
`

const setColor = setCSSVar('hover-color')
const removeColor = removeCSSVar('hover-color')

const Card = ({
  logo,
  children: Child,
  justifyContent = 'flex-start',
  isOpen,
  background,
  color,
  ...rest
}) => {
  const onHover = setColor(color ?? background)
  return (
    <Wrapper
      {...rest}
      background={background}
      data-open={isOpen}
      onMouseEnter={onHover}
      onMouseLeave={removeColor}
    >
      {isOpen && <HideOverflow />}
      {logo}
      <Content justifyContent={justifyContent}>
        <Child isOpen={isOpen} />
      </Content>
    </Wrapper>
  )
}

export default Card