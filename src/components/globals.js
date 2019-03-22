const header = alpha => `rgba(242, 112, 82, ${alpha})`
const code = alpha => `rgba(45, 40, 51, ${alpha})`

export const contentWidth = '1280px'

export const colours = {
  background: '#463d4e',
  codeBackground: code(1),
  header: header(1),
  link: '#e68259',
  text: '#ffffff',
  table: header(0),
  rgba: {
    header: header,
    codeBackground: code
  }
}

export const selections = {
  main: header(0.99),
  image: header(0.75),
  link: colours.text
}

export const margins = {
  sm: 12,
  md: 28,
  line: '0.085em',
  superSmall: '0.25em',
  extraSmall: '0.75em',
  small: '1em',
  normal: '1.25em',
  medium: '1.5em',
  large: '2em',
  profile: '265px'
}

export const fonts = {
  button: 0.6,
  code: 0.95,
  nav: 1.25,
  social: 1.35,
  header: 1.5,
  large: 1.75
}

export const transitions = {
  hover: '0.3s cubic-bezier(0.7, 0, 0.3, 1)',
  cursor: '1.5s cubic-bezier(0.68, 0.01, 0.01, 0.99)'
}

export const animations = {
  link: '0.2em'
}
