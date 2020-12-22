// Adapted from https://github.com/nvandoorn/portfolio/blob/master/src/components/container.js
import React from 'react'
import { css } from '@emotion/react'

const mq = breakpoints =>
  Object.values(breakpoints)
    .map(({ breakpoint, size }) => `
      @media (min-width: ${breakpoint}) {
        width: ${size};
      }
    `).join('\n')

const Container = p => {
  const style = theme => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5px 0;
    width: 93%;
    max-width: 1200px;
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    ${mq(theme.breakpoints)}
  `
  return <div css={style}>{p.children}</div>
}

export default Container
