import Typography from 'typography'
import theme from 'typography-theme-noriega'
import CodePlugin from 'typography-plugin-code'

const googleFonts = theme.googleFonts.concat({
  name: 'Nunito',
  styles: ['300', '700']
}, { name: '&display=swap'})

const myTheme = {
  ...theme,
  googleFonts,
  baseFontSize: '18px',
  bodyFontFamily: ['Nunito', 'sans-serif'],
  baseLineHeight: 1.6,
  scaleRatio: 1.5,
  plugins: [new CodePlugin()]
}

const typography = new Typography(myTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
