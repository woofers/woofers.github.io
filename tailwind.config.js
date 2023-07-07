const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/**
 * @param {Exclude<Exclude<import('tailwindcss').Config["theme"], undefined>["colors"], undefined>} colors - Tailwind colors
 * @returns {[Exclude<Exclude<import('tailwindcss').Config["theme"], undefined>["colors"], undefined>, Exclude<Exclude<import('tailwindcss').Config["theme"], undefined>["colors"], undefined>]} Split colors
 */
const getBasicColors = colors => {
  const {
    white,
    black,
    transparent,
    current,
    inherit,
    slate,
    gray,
    zinc,
    neutral,
    stone,
    red,
    orange,
    amber,
    yellow,
    lime,
    green,
    emerald,
    teal,
    cyan,
    sky,
    blue,
    indigo,
    violet,
    purple,
    fuchsia,
    pink,
    rose
  } = colors
  const palette = {
    slate,
    gray,
    zinc,
    neutral,
    stone,
    red,
    orange,
    amber,
    yellow,
    lime,
    green,
    emerald,
    teal,
    cyan,
    sky,
    blue,
    indigo,
    violet,
    purple,
    fuchsia,
    pink,
    rose
  }
  const basic = { inherit, current, transparent }
  const other = { white, black, ...palette }
  return [basic, other]
}

const getColors = () => {
  const [basic, other] = getBasicColors(colors)
  const vars = Object.entries(other).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      const more = Object.entries(value).reduce((acc, [scale, value]) => {
        return {
          ...acc,
          [scale]: `rgb(var(--color-${key}-${scale}) / <alpha-value>)`
        }
      }, {})
      return { ...acc, [key]: more }
    }
    return { ...acc, [key]: `rgb(var(--color-${key}) / <alpha-value>)` }
  }, {})
  return {
    background: 'rgb(var(--color-background) / <alpha-value>)',
    ...basic,
    ...vars
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '784px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: getColors(),
    extend: {
      keyframes: {
        slideOut: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { display: 'none', transform: 'var(--transform-value)' }
        },
        slideIn: {
          '0%': { transform: 'var(--transform-value)' },
          '100%': { transform: 'translate3d(0,0,0)' }
        },
        cmdSlideOut: {
          '0%': { opacity: "1",  transform: 'scale(1)' },
          '100%': { opacity: "0", transform: 'scale(0.96)' }
        },
        cmdSlideIn: {
          '0%': { opacity: "0", transform: 'scale(0.96)' },
          '100%': { opacity: "1",  transform: 'scale(1)' }
        },
        topShine: {
          to: { opacity: "1" }
        },
        border: {
          to: { boxShadow: '0 0 0 1px #343434' }
        },
        shine: {
          to: {
            ['background-position']: '200% center',
            opacity: "0"
          }
        },
        loading: {
          '0%': { opacity: "0", transform: 'translateX(0)' },
          '50%': { opacity: "1",  transform: 'translateX(100%)' },
          '100%': { opacity: "0", transform: 'translateX(0)' }
        },
      },
      animation: {
        slideOut: 'slideOut 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        slideIn: 'slideIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        cmdkSlideOut: 'cmdkSlideOut 200ms ease forwards',
        cmdkSlideIn: 'cmdkSlideIn 200ms forwards',
        topShine: 'topShine 0.1s ease forwards 0.2s',
        border: 'border 1s linear forwards 0.5s',
        shine: 'shine 3s ease forwards 0.1s',
        loading: 'loading 1.5s ease 1s'
      },
      fontFamily: {
        sans: ['var(--font-sans-serif)', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('dark-mode', [
        '@media (prefers-color-scheme: dark) { .system & }',
        '.dark &',
      ])
    }),
  ]
}
