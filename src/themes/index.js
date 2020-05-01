
const orange = '#f27052'

const colors = {
  background: '#fff',
  accent: orange,
  accentGradient: 'linear-gradient(110deg, #f27052 10%, #fd904f)',
  code: '#2d2833',
  text: {
    dark: '#000',
    light: '#fff',
    ghost: '#fbd4cb',
    code: '#aaaaca',
    comment: '#787890',
    punctuation: '#8b8bb1',
    string: '#dd672c',
    tag: '#fe8c52'
  },
  link: {
    normal: {
      normal: orange,
      hover: '#f5947d'
    },
    light: {
      normal: '#fff',
      hover: '#fbe0a0'
    },
    pico: {
      normal: '#696068',
      hover: '#9c949b'
    }
  },
  selection: {
    text: '#06324c',
    home: 'rgba(232, 234, 243, 0.68)',
    background: 'rgba(0, 0, 255, 0.3)',
    code: 'rgba(236, 200, 191, 0.99)'
  }
}


const breakpoints = {
  nav: {
    breakpoint: '575px',
    size: '90%'
  },
  mobile: {
    breakpoint: '650px',
    size: '90%'
  },
  small: {
    breakpoint: '850px',
    size: '750px'
  },
  normal: {
    breakpoint: '992px',
    size: '920px'
  },
  large: {
    breakpoint: '1170px',
    size: '90%'
  }
}

export default {
  colors,
  breakpoints
}
