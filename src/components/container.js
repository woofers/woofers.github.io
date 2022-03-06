// Adapted from https://github.com/nvandoorn/portfolio/blob/master/src/components/container.js
import React from 'react'
import { styled } from 'ruffsponsive'

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

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: '5px 0',
  width: '93%',
  maxWidth: '1200px',
  minHeight: '100%',
  boxSizing: 'border-box',
})

const Container = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

export default Container
