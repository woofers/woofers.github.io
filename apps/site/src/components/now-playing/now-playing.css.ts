import { style } from '@vanilla-extract/css'

export const musicText = style({
  maxWidth: 'calc(100vw - 122px)',
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: '458px'
    }
  }
})
