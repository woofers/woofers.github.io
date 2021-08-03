import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Title from './title'
import Text from './text'

const Wrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  display: inline-flex;
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
  width: calc(100% - 170px);
  height: calc(100% - 25px);
  display: flex;
  align-items: flex-end;
  justify-content: ${props => props.justifyContent};
`

const Card = ({ logo, children, justifyContent = 'flex-start', ...rest }) => (
  <Wrapper {...rest}>
    {logo}
    <Content justifyContent={justifyContent}>{children}</Content>
  </Wrapper>
)

export default Card
