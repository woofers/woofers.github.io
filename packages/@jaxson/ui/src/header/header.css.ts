import { style } from '@vanilla-extract/css'

export const header = style({
  viewTransitionName: 'header'
})

export const headerAbove = style({
  top: 'unset',
  left: '0px',
  padding: '0 20px',
  bottom: '8px',
  '@media': {
    'screen and (min-width: 768px)': {
      top: '-28px',
      padding: '0',
      left: 'unset',
      bottom: 'unset'
    }
  }
})
