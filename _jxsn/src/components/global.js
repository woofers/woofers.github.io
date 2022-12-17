import { globalCss } from 'stitches'

const grid = {
  background: `linear-gradient(
  to bottom,
  #fff,
  #fff 50%,
  #c9c9c9 50%,
  #c9c9c9
)`,
  backgroundSize: '100% 8px'
}

const useGlobalStyles = globalCss({
  '*': { boxSizing: 'border-box' },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '$white',
    color: '$gray900',
  },
  'h1, h2, h3, h4, h5, h6, p': {},
})

const Global = ({ children }) => {
  useGlobalStyles()
  return <>{children}</>
}

export default Global
