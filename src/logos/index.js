import { styled } from 'ruffsponsive'
import React from 'react'
import ship from './ship.png'
import fts from './dark-fts.png'

export { ReactComponent as EyeIcon } from './eye.svg'
export { ReactComponent as Machobear } from './machobear.svg'
export { ReactComponent as Fts360 } from './fts-360.svg'
export { ReactComponent as LivRentLight } from './liv.rent.svg'
export { ReactComponent as LivRentDark } from './liv.rent-dark.svg'
export { ReactComponent as LivRent } from './liv.svg'
export { ReactComponent as LivRentRed } from './liv-rent.svg'
export { ReactComponent as WaveIcon } from './wave.svg'
export { ReactComponent as GitHubIcon } from './github.svg'
export { ReactComponent as GitHubText } from './github-text.svg'
export { ReactComponent as EarthIcon } from './earth.svg'

const Img = styled('img', {
  width: '80px',
  height: '80px',
})

const FtsImg = styled('div', {
  width: '65px',
  height: '30px',
  backgroundImage: `url(${fts.src})`,
  backgroundSize: '148% auto',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
})

export const AlienExpansion = () => <Img src={ship.src} alt="" />

export const Fts = () => <FtsImg />
