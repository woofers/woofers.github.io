// Adapted from https://github.com/nvandoorn/portfolio/blob/master/src/components/container.js
import React from 'react'
import { styled, css } from 'emotion'

const mq = breakpoints =>
  Object.values(breakpoints)
    .map(
      ({ breakpoint, size }) => `
      @media (min-width: ${breakpoint}) {
        width: ${size};
      }
    `
    )
    .join('\n')


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 5px 0;
  width: 93%;
  max-width: 1200px;
  min-height: 100%;
  box-sizing: border-box;
  ${({ theme }) => mq(theme.breakpoints)}
`

const Container = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

export default Container
