import { css } from '@emotion/core'

const base = css`
  padding: 0;
  margin-bottom: 1.6rem;
  font-family: 'Lato',sans-serif;
  text-rendering: optimizeLegibility;
  line-height: 1.1;
`

export const small = css`
  ${base}
  font-weight: 400;
  font-size: 1.1rem;
  color: #fbd4cb;
`

export const normal = css`
  ${base}
  font-weight: 700;
  font-size: 0.92211rem;
`

export const large = css`
  ${base}
  font-weight: 700;
  font-size: 1.5rem;
`
