import Typography from 'typography'
import theme from 'typography-theme-lawton'
import CodePlugin from 'typography-plugin-code'

const myTheme = {
  ...theme,
  baseFontSize: '15px',
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  baseLineHeight: 1.45,
  scaleRatio: 2.25,
  plugins: [new CodePlugin()]
}

const typography = new Typography(myTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
