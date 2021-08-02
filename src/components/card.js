import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Card = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  display: inline-flex;
  background: ${props => props.background || '#fff'};
  &[data-open=true] {
    cursor: default;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  box-shadow: rgba(0, 0, 0, 0.10) 0px 5px 15px 0px;
`

export default Card
