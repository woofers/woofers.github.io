const header = alpha => `rgba(242, 112, 82, ${alpha})`

export const colours = {
  background: '#463d4e',
  codeBackground: '#2d2833',
  header: header(1),
  link: '#e68259',
  text: '#ffffff',
  table: header(0)
}

export const selections = {
  main: header(0.99),
  image: header(0.75),
  link: colours.text
}

export const margins = {
  xsm: 6,
  sm: 12,
  md: 28,
  lg: 50,
  xl: 75
}

export const transitions = {
  hover: '0.3s cubic-bezier(0.7, 0, 0.3, 1)'
}
