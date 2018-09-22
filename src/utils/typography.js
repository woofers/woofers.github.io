import Typography from 'typography'
import theme from 'typography-theme-lawton'
import CodePlugin from 'typography-plugin-code'

const myTheme = {
  ...theme,
  baseFontSize: '18px',
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  baseLineHeight: 1.75,
  scaleRatio: 1.85,
  plugins: [new CodePlugin()]
}

const typography = new Typography(myTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
