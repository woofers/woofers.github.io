import {
  createGlobalTheme,
  createGlobalThemeContract
} from '@vanilla-extract/css'
import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles'
import { tailwindColors } from './tailwind'

export const zIndex = {
  normal: 0,
  modal: 500
}

const camelToKebab = (value: string) =>
  value
    .split('')
    .reduce(
      (acc, char) =>
        char === char.toUpperCase() && char !== char.toLowerCase()
          ? `${acc}-${char.toLowerCase()}`
          : `${acc}${char}`,
      ''
    )

const transformColorsToVars = <T extends Record<string, string>>(
  colors: T
): Record<keyof T, string> =>
  Object.entries(colors).reduce(
    (acc, [key]) => ({
      ...acc,
      [key]: `color-${camelToKebab(key)}`
    }),
    {} as Record<keyof T, string>
  )

type Theme = 'light' | 'dark'

const baseColors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  currentColor: 'currentColor'
}

const textDark = 'oklch(0.96 0.008 262.67)'
const textLight = 'oklch(0.2 0.01 262.67)'

export const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024
}

const createThemeVars = (theme: Theme) => {
  const isDark = theme === 'dark'

  return {
    colors: {
      ...baseColors,
      backgroundPure: isDark ? baseColors.black : baseColors.white,
      background: isDark ? 'oklch(0.1821 0.0139 94.03)' : 'oklch(0.9821 0 0)',
      primary: isDark ? textDark : textLight,
      gray50: isDark ? tailwindColors.gray.gray950 : tailwindColors.gray.gray50,
      gray100: isDark
        ? tailwindColors.gray.gray900
        : tailwindColors.gray.gray100,
      gray200: isDark
        ? tailwindColors.gray.gray800
        : tailwindColors.gray.gray200,
      gray300: isDark
        ? tailwindColors.gray.gray700
        : tailwindColors.gray.gray300,
      gray400: isDark
        ? tailwindColors.gray.gray600
        : tailwindColors.gray.gray400,
      gray500: isDark
        ? tailwindColors.gray.gray500
        : tailwindColors.gray.gray500,
      gray600: isDark
        ? tailwindColors.gray.gray400
        : tailwindColors.gray.gray600,
      gray700: isDark
        ? tailwindColors.gray.gray300
        : tailwindColors.gray.gray700,
      gray800: isDark
        ? tailwindColors.gray.gray200
        : tailwindColors.gray.gray800,
      gray900: isDark
        ? tailwindColors.gray.gray100
        : tailwindColors.gray.gray900,
      gray950: isDark
        ? tailwindColors.gray.gray50
        : tailwindColors.gray.gray950,
      neutral50: isDark
        ? tailwindColors.neutral.neutral950
        : tailwindColors.neutral.neutral50,
      neutral100: isDark
        ? tailwindColors.neutral.neutral900
        : tailwindColors.neutral.neutral100,
      neutral200: isDark
        ? tailwindColors.neutral.neutral800
        : tailwindColors.neutral.neutral200,
      neutral300: isDark
        ? tailwindColors.neutral.neutral700
        : tailwindColors.neutral.neutral300,
      neutral400: isDark
        ? tailwindColors.neutral.neutral600
        : tailwindColors.neutral.neutral400,
      neutral500: isDark
        ? tailwindColors.neutral.neutral500
        : tailwindColors.neutral.neutral500,
      neutral600: isDark
        ? tailwindColors.neutral.neutral400
        : tailwindColors.neutral.neutral600,
      neutral700: isDark
        ? tailwindColors.neutral.neutral300
        : tailwindColors.neutral.neutral700,
      neutral800: isDark
        ? tailwindColors.neutral.neutral200
        : tailwindColors.neutral.neutral800,
      neutral900: isDark
        ? tailwindColors.neutral.neutral100
        : tailwindColors.neutral.neutral900,
      neutral950: isDark
        ? tailwindColors.neutral.neutral50
        : tailwindColors.neutral.neutral950,

      tableOfConentsLine: isDark ? '#34322d' : '#c9c9c9',
      tableOfConentsLineActive: isDark
        ? 'oklch(0.7 0.24 37.34)'
        : 'color-mix(in oklab, oklch(0.71 0.19 38.72) 77%, oklch(1 0 0))',

      socialText: isDark
        ? 'oklch(0.82 0.0014 106.43)'
        : tailwindColors.neutral.neutral700,
      codeBackground: isDark
        ? tailwindColors.neutral['neutral800/50']
        : '#f6f6f6',
      codeBorder: isDark
        ? tailwindColors.neutral['neutral800/90']
        : tailwindColors.neutral['neutral400/70'],

      codeBlockBorder: isDark
        ? tailwindColors.neutral['neutral800/90']
        : tailwindColors.neutral['neutral400/20'],
      divider: isDark
        ? tailwindColors.neutral['neutral700/40']
        : tailwindColors.neutral['neutral400/30'],

      externalLink: isDark
        ? 'oklch(0.77 0.17 38.68)'
        : 'oklch(0.77 0.17 38.68)',

      logoMark: isDark
        ? 'oklch(0.82 0.0014 106.43)'
        : tailwindColors.neutral.neutral600,
      headerBackground: isDark
        ? 'oklab(0.37 0.02 0.01 / 0.4)'
        : 'rgba(255, 255, 255, 0.8)',
      headerBorder: isDark
        ? 'oklch(0.3095 0.0092 88.75)'
        : 'rgba(0, 0, 0, 0.08)',
      headerFill: isDark ? 'oklch(0.2135 0.0118 91.77)' : baseColors.white,

      textPrimary: isDark
        ? 'oklch(0.9341 0.0043 17.23)'
        : tailwindColors.neutral.neutral600,

      brownBackground: '#14120b',
      brownForeground: '#1B1913',
      brownHighlight: isDark ? '#181610' : 'rgba(255, 255, 255, 0)',
      orange: '#f54e00',
      textFaded: tailwindColors['slate']['slate900/60'],
      altTextFaded: tailwindColors['slate']['slate100/70'],

      music: isDark ? 'oklch(0.75 0.1105 153.78)' : 'oklch(0.5 0.13 153.78)',
      musicText: isDark
        ? 'oklch(0.75 0.1105 153.78)'
        : 'oklch(0.2 0.01 268.21 / 0.47)',

      npm: isDark ? '#cb3837' : '#f54e00',

      info: isDark ? 'oklch(0.5498 0.192 262.67)' : 'oklch(0.55 0.24 262.67)',
      infoFaded: isDark ? 'oklch(0.13 0 0)' : 'oklch(0.97 0.03 212.25)',
      // Border colors
      borderPrimary: isDark
        ? 'oklch(0.6298 0.192 262.67)'
        : 'oklch(0.47 0.24 262.67)',
      borderPrimaryFaded: isDark
        ? 'oklch(0.3 0.01 0)'
        : 'oklch(0.8888 0.0402 212.25)',
      borderCritical: isDark
        ? 'oklch(0.6674 0.176 26.97)'
        : 'oklch(0.51 0.22 26.97)',
      borderCriticalFaded: isDark
        ? 'oklch(0.35 0.0352 26.97)'
        : 'oklch(0.8 0.15 32.55)',
      borderWarning: isDark ? 'oklch(0.8836 0.16 80)' : 'oklch(0.75 0.2 80)',
      borderWarningFaded: isDark
        ? 'oklch(0.35 0.032 80)'
        : 'oklch(0.87 0.19 87.78)',
      borderPositive: isDark
        ? 'oklch(0.5962 0.104 153.78)'
        : 'oklch(0.45 0.13 153.78)',
      borderPositiveFaded: isDark
        ? 'oklch(0.33 0.1 146.41)'
        : 'oklch(0.85 0.16 132.08)',
      borderNeutral: isDark
        ? 'oklch(1 0.008 262.67/0.16)'
        : 'oklch(0 0.01 262.67/0.12)',
      borderNeutralFaded: isDark
        ? 'oklch(1 0.01 262.67/0.08)'
        : 'oklch(0 0.005 262.67/0.08)',
      borderDisabled: isDark
        ? 'oklch(0.28 0 262.67)'
        : 'oklch(0 0.01 262.67/0.06)',

      // Foreground colors
      foregroundPrimary: isDark ? 'oklch(0.85 0 0)' : 'oklch(0.6 0.13 194.82)',
      foregroundCritical: isDark
        ? 'oklch(0.75 0.187 26.97)'
        : 'oklch(0.5 0.22 26.97)',
      foregroundWarning: isDark ? 'oklch(0.75 0.17 80)' : 'oklch(0.5 0.2 80)',
      foregroundPositive: isDark
        ? 'oklch(0.75 0.1105 153.78)'
        : 'oklch(0.5 0.13 153.78)',
      foregroundNeutral: isDark
        ? 'oklch(0.96 0.008 262.67)'
        : 'oklch(0.2 0.01 262.67)',
      foregroundNeutralFaded: isDark
        ? 'oklch(0.81 0.008 262.67)'
        : 'oklch(0.45 0.01 262.67)',
      foregroundDisabled: isDark
        ? 'oklch(0.4 0 262.67)'
        : 'oklch(0.84 0 262.67)',

      // Background colors
      backgroundCritical: isDark
        ? 'oklch(0.5874 0.176 26.97)'
        : 'oklch(0.59 0.22 26.97)',
      backgroundCriticalFaded: isDark
        ? 'oklch(0.25 0.0352 26.97)'
        : 'oklch(0.89 0.08 30.2)',
      backgroundWarning: isDark
        ? 'oklch(0.8036 0.16 80)'
        : 'oklch(0.83 0.2 80)',
      backgroundWarningFaded: isDark
        ? 'oklch(0.25 0.032 80)'
        : 'oklch(0.93 0.09 89.95)',
      backgroundPositive: isDark
        ? 'oklch(0.5162 0.104 153.78)'
        : 'oklch(0.53 0.13 153.78)',
      backgroundPositiveFaded: isDark
        ? 'oklch(0.25 0.05 152.25)'
        : 'oklch(0.96 0.08 132.72)',
      backgroundNeutral: isDark
        ? 'oklch(0.36 0.008 262.67)'
        : 'oklch(0.92 0.01 262.67)',
      backgroundNeutralFaded: isDark
        ? 'oklch(0.25 0.01 262.67)'
        : 'oklch(0.97 0.005 262.67)',
      backgroundDisabled: isDark
        ? 'oklch(0.28 0 262.67)'
        : 'oklch(0.95 0 262.67)',
      backgroundDisabledFaded: isDark
        ? 'oklch(0.23 0 262.67)'
        : 'oklch(0.98 0 262.67)',
      backgroundElevationBase: isDark
        ? 'oklch(0.2 0 262.67)'
        : 'oklch(1 0 262.67)',
      backgroundElevationRaised: isDark
        ? 'oklch(0.21 0 262.67)'
        : 'oklch(1 0 262.67)',
      backgroundElevationOverlay: isDark
        ? 'oklch(0.22 0 262.67)'
        : 'oklch(1 0 262.67)',
      backgroundPage: isDark ? 'oklch(0.16 0 262.67)' : 'oklch(1 0 262.67)',
      backgroundPageFaded: isDark
        ? 'oklch(0.18 0 262.67)'
        : 'oklch(0.97 0 262.67)'
    },
    space: {
      '0': '0px',
      '025': '1px',
      '050': '2px',
      '100': '4px',
      '150': '6px',
      '200': '8px',
      '300': '12px',
      '400': '16px',
      '500': '20px',
      '600': '24px',
      '800': '32px',
      '1000': '40px',
      '1200': '48px',
      '1600': '64px',
      '2000': '80px',
      '2400': '96px',
      '2800': '112px',
      '3200': '128px'
    },
    misc: {
      headerBackdrop: isDark
        ? 'blur(8px) brightness(0.3) hue-rotate(30deg)'
        : 'blur(8px) saturate(180%)'
    },
    shadow: {
      inset:
        'rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px',
      normal:
        'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.02) 0px 4px 6px -1px, rgba(0, 0, 0, 0.02) 0px 2px 4px -2px'
    },
    font: {
      mono: 'var(--font-geist-mono), ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif',
      sansSerif:
        'var(--font), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    radii: {
      none: '0px',
      sm: '2px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      pill: '9999px',
      round: '50%'
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      xxxl: '30px',
      xxxxl: '36px'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2'
    },
    zIndex: {
      normal: '0',
      modal: '100'
    }
  }
}

const lightVars = createThemeVars('light')
const darkVars = createThemeVars('dark')

export const vars = createGlobalThemeContract({
  colors: transformColorsToVars(lightVars.colors),
  space: {
    '0': 'space-0',
    '025': 'space-025',
    '050': 'space-050',
    '100': 'space-100',
    '150': 'space-150',
    '200': 'space-200',
    '300': 'space-300',
    '400': 'space-400',
    '500': 'space-500',
    '600': 'space-600',
    '800': 'space-800',
    '1000': 'space-1000',
    '1200': 'space-1200',
    '1600': 'space-1600',
    '2000': 'space-2000',
    '2400': 'space-2400',
    '2800': 'space-2800',
    '3200': 'space-3200'
  },
  misc: {
    headerBackdrop: 'misc-header-backdrop'
  },
  shadow: {
    inset: 'shadow-inset',
    normal: 'shadow-normal'
  },
  font: {
    serif: 'font-serif',
    sansSerif: 'font-sans-serif',
    mono: 'font-mono'
  },
  radii: {
    none: 'radius-none',
    sm: 'radius-sm',
    md: 'radius-md',
    lg: 'radius-lg',
    xl: 'radius-xl',
    pill: 'radius-pill',
    round: 'radius-round'
  },
  fontWeight: {
    light: 'font-weight-light',
    regular: 'font-weight-regular',
    medium: 'font-weight-medium',
    semibold: 'font-weight-semibold',
    bold: 'font-weight-bold'
  },
  fontSize: {
    xxs: 'font-size-xxs',
    xs: 'font-size-xs',
    sm: 'font-size-sm',
    md: 'font-size-md',
    lg: 'font-size-lg',
    xl: 'font-size-xl',
    xxl: 'font-size-xxl',
    xxxl: 'font-size-xxxl',
    xxxxl: 'font-size-xxxxl'
  },
  lineHeight: {
    none: 'line-height-none',
    tight: 'line-height-tight',
    normal: 'line-height-normal',
    relaxed: 'line-height-relaxed',
    loose: 'line-height-loose'
  },
  zIndex: {
    normal: 'z-index-normal',
    modal: 'z-index-modal'
  }
})

export const lightTheme = 'light'
export const darkTheme = 'dark'

createGlobalTheme(`.${lightTheme}`, vars, lightVars)
createGlobalTheme(`.${darkTheme}`, vars, darkVars)

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet}px)` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}px)` }
  },
  defaultCondition: 'mobile',
  dynamicProperties: {
    color: vars.colors,
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    borderRadius: vars.radii,
    margin: vars.space,
    marginTop: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    padding: vars.space,
    paddingTop: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingBottom: vars.space,
    display: true,
    textAlign: true,
    flexDirection: true,
    justifyContent: true,
    alignItems: true,
    borderWidth: vars.space,
    borderStyle: true,
    cursor: true,
    backdropFilter: true,
    border: true,
    borderBottom: true,
    backgroundClip: true,
    whiteSpace: true,
    letterSpacing: true,
    alignSelf: true,
    clip: true,
    userSelect: true,
    textOverflow: true,
    minHeight: vars.space,
    boxShadow: vars.shadow,
    maxWidth: vars.space,
    minWidth: vars.space,
    height: vars.space,
    width: vars.space,
    fontWeight: vars.fontWeight,
    fontSize: vars.fontSize,
    rowGap: vars.space,
    columnGap: vars.space,
    gridTemplateColumns: vars.space,
    gridRowGap: vars.space,
    gridColumnGap: vars.space,
    gap: vars.space,
    lineHeight: vars.lineHeight,
    fontFamily: vars.font,
    zIndex: vars.zIndex,
    top: vars.space,
    left: vars.space,
    right: vars.space,
    bottom: vars.space,
    transform: true
  },
  staticProperties: {
    display: ['block', 'flex', 'inline-block', 'inline-flex', '-webkit-box'],
    textDecoration: ['none', 'underline'],
    flex: ['auto', 'none', '1'],
    flexShrink: ['0'],
    position: ['static', 'absolute', 'fixed', 'relative', 'sticky'],
    pointerEvents: ['auto', 'none'],
    overflowX: ['auto', 'hidden', 'visible', 'scroll'],
    overflowY: ['auto', 'hidden', 'visible', 'scroll'],
    overflow: ['auto', 'hidden', 'visible', 'scroll'],
    WebkitLineClamp: ['1', '2', '3', '4', '5'],
    WebkitBoxOrient: [
      'horizontal',
      'vertical',
      'inline-axis',
      'block-axis',
      'inherit'
    ]
  },
  shorthands: {
    background: ['backgroundColor'],
    gapx: ['columnGap'],
    gapy: ['rowGap'],
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    p: ['padding'],
    pr: ['paddingRight'],
    pl: ['paddingLeft'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    font: ['fontFamily']
  }
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]

/*

position: relative;
  z-index: 0;
  border: 1px solid oklch(.53 .25 265.05);
  background-image: linear-gradient(180deg,oklch(.67 .19 263),oklch(.59 .26 263) 62%,oklch(.64 .22 263));
  box-shadow: inset 0 1px 0 oklch(1 0 0/.2),inset 0 -1px 0 oklch(0 0 0/.2),0 1px 2px oklch(0 0 0/.2);
  color: oklch(1 0 0);
  text-shadow: 0 1px rgb(0 11 15/40%);
  transition-property: border-color,transform,opacity,scale;
  transition-duration: .2s;
  will-change: transform;

*/

/*

--text-xs: .75rem;
    --text-xs--line-height: calc(1/.75);
    --text-sm: .875rem;
    --text-sm--line-height: calc(1.25/.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5/1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75/1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75/1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2/1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25/1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5/2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;

--tracking-tight: -.025em;
    --tracking-normal: 0em;
    --tracking-wide: .025em;
    --tracking-widest: .1em;
    --leading-tight: 1.25;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    */

/*
:root {
  --color-1: oklch(0.520 0.137 49.5);
  --color-2: oklch(0.563 0.148 49.5);
  --color-3: oklch(0.606 0.159 49.5);
  --color-4: oklch(0.649 0.171 49.5);
  --color-5: oklch(0.692 0.182 49.5);
  --color-6: oklch(0.735 0.193 49.5);
  --color-7: oklch(0.778 0.158 49.5);
  --color-8: oklch(0.821 0.123 49.5);
  --color-9: oklch(0.864 0.090 49.5);
  --color-10: oklch(0.907 0.060 49.5);
  --color-11: oklch(0.950 0.031 49.5);
}

:root {
  --color-1: oklch(0.420 0.111 49.5);
  --color-2: oklch(0.473 0.125 49.5);
  --color-3: oklch(0.526 0.139 49.5);
  --color-4: oklch(0.579 0.153 49.5);
  --color-5: oklch(0.632 0.167 49.5);
  --color-6: oklch(0.685 0.181 49.5);
  --color-7: oklch(0.738 0.194 49.5);
  --color-8: oklch(0.791 0.148 49.5);
  --color-9: oklch(0.844 0.106 49.5);
  --color-10: oklch(0.897 0.067 49.5);
  --color-11: oklch(0.950 0.031 49.5);
}

*/

// oklch(0.24 0.07 150.92)
