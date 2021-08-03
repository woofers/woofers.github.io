import styled from '@emotion/styled'
import React from 'react'
import ship from './ship.png'

export { ReactComponent as Fts360 } from './fts-360.svg'
export { ReactComponent as LivRentLight } from './liv.rent.svg'
export { ReactComponent as LivRentDark } from './liv.rent-dark.svg'
export { ReactComponent as LivRent } from './liv.svg'

const Img = styled.img`
  width: 80px;
  height: 80px;
`

export const AlienExpansion = () => <Img src={ship} />
