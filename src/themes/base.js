
const color = (r, g, b, a) =>
  `rgba(${r}, ${g}, ${b}, ${typeof a !== 'undefined' ? a : 1})`

export const rgba = {
  header: alpha => color(242, 112, 82, alpha),
  code: alpha => color(45, 40, 51, alpha),
  text: alpha => color(255, 255, 255, alpha)
}

const margins = {
  extraSmall: '0.75em',
  small: '1em',
  normal: '1.25em',
  medium: '1.5em',
  large: '2em',
  line: '0.085em',
  nav: {
    overhang: '28px',
    buttonSize: '28px',
  },
  items: '12px',
  itemsSmall: '6px',
  profile: '250px',
  profileRadius: '125px',
  image: '20px'
}

const selections = {
  main: rgba.header(0.99),
  image: rgba.header(0.75),
  header: rgba.code(0.33)
}

const link = '#e68259'

const colors = {
  header: rgba.header(1),
  headerText: '#ffffff',
  text: rgba.text(),
  link,
  background: '#463d4e',
  codeBackground: rgba.code(),
  table: rgba.header(0),
  button: rgba.code(0.15),
  switchBackground: "#4d4950",
  footer: rgba.code(),
  footerElements: link,
  pico: '#7d737c'
}

const transitions ={
  hover: '0.3s cubic-bezier(0.7, 0, 0.3, 1)',
  cursor: '1.5s cubic-bezier(0.68, 0.01, 0.01, 0.99)'
}

const animations = {
  link: '0.2em'
}

const fonts = {
  header: '1.5em',
  social: '1.35em',
  nav: '1.25em',
  large: '1.75em',
  code: '0.95em',
  splash: '3.5em'
}

const contentWidth = '1280px'
const comments = 'github-dark-orange'

export const theme = {
  margins,
  selections,
  colors,
  transitions,
  animations,
  fonts,
  contentWidth,
  comments
}
