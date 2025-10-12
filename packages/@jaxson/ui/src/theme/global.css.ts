import { globalStyle, keyframes } from '@vanilla-extract/css'
import type { CSSProperties } from 'react'
import { breakpoints, vars } from './theme.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box'
})

globalStyle('*', {
  margin: 0
})

globalStyle(':root', {
  ['interpolate-size' as keyof CSSProperties]: 'allow-keywords',
  ['--font' as keyof CSSProperties]: '"Inter"',
  fontFamily: 'var(--font), sans-serif',
  fontStyle: 'normal',
  '@supports': {
    '(font-variation-settings: normal)': {
      ['--font' as keyof CSSProperties]: '"InterVariable"',
      fontOpticalSizing: 'auto'
    },
    '(hanging-punctuation: first)': {
      ['hangingPunctuation' as keyof CSSProperties]: 'first allow-end last'
    }
  }
})

globalStyle('.fonts-loaded, html:not(.js)', {
  '@supports': {
    '(font-variation-settings: normal)': {
      fontFeatureSettings: "'ss01' 1, 'ss02' 1"
    }
  }
})

globalStyle('body', {
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
  backgroundColor: vars.colors.background
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%'
})

globalStyle('input, button, textarea, select', {
  font: 'inherit'
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word'
})

globalStyle('p', {
  textWrap: 'pretty'
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  textWrap: 'balance'
})

globalStyle('#__next', {
  isolation: 'isolate'
})

globalStyle('button, input[type="submit"], input[type="reset"]', {
  appearance: 'none',
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  textAlign: 'left',
  font: 'inherit'
})

globalStyle('code', {
  fontFamily: 'inherit'
})

const fadeOut = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
})

const fadeIn = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
})

const grow = keyframes({
  '0%': {
    height: '50%'
  },
  '80%': {
    height: '50%'
  },
  '100%': {
    height: '100%'
  }
})

const shrink = keyframes({
  '0%': {
    height: '100%'
  },
  '20%': {
    height: '50%'
  },
  '100%': {
    height: '50%'
  }
})

const siftUp = keyframes({
  '0%': {
    transform: 'translateY(0)'
  },
  '100%': {
    transform: 'translateY(-10vh)'
  }
})

// Enable view transitions
globalStyle('html', {
  viewTransitionName: 'none'
})

globalStyle('::view-transition-old(.slide-in)', {
  animationName: `-ua-view-transition-fade-out, ${shrink}`
})

globalStyle('::view-transition-new(.slide-in)', {
  animationName: `-ua-view-transition-fade-in, ${grow}`
})

globalStyle('::view-transition-group(.slide-in)', {})

globalStyle('::view-transition-old(.fade)', {
  animation: `0.25s both ${fadeOut} ease-in-out`
})

globalStyle('::view-transition-new(.fade)', {
  animation: `0.15s 0.15s both ${fadeIn} ease-in`
})

globalStyle('::view-transition-group(.fade)', {
  animationName: 'none'
})

globalStyle('body', {
  viewTransitionName: 'none'
})

globalStyle('html.dark .shiki, html.dark .shiki span', {
  color: 'var(--shiki-dark) !important',
  backgroundColor: 'var(--shiki-dark-bg) !important',
  fontStyle: 'var(--shiki-dark-font-style) !important',
  fontWeight: 'var(--shiki-dark-font-weight) !important',
  textDecoration: 'var(--shiki-dark-text-decoration) !important'
})

globalStyle('html, body', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      viewTransitionName: 'none'
    }
  }
})

globalStyle('::view-transition-old(.slide-in)', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationName: 'none'
    }
  }
})

globalStyle('::view-transition-new(.slide-in)', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationName: 'none'
    }
  }
})

globalStyle('::view-transition-group(.slide-in)', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0s'
    }
  }
})

globalStyle('::view-transition-old(.fade)', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none'
    }
  }
})

globalStyle('::view-transition-new(.fade)', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none'
    }
  }
})

globalStyle('::view-transition-group(.fade)', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0s'
    }
  }
})

globalStyle('::view-transition-group(.slide-in)', {
  animationDuration: '0.15s',
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      animationDuration: '0.25s'
    }
  }
})
