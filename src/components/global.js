import { globalCss } from 'jxsn'

const accent = '#f27052'
const code = '#2d2833'

const text = {
  dark: '#000',
  light: '#fff',
  ghost: '#fbd4cb',
  code: '#aaaaca',
  comment: '#787890',
  punctuation: '#8b8bb1',
  string: '#dd672c',
  tag: '#fe8c52'
}

const useGlobalStyles = globalCss({
  '*, *::before, *::after': { boxSizing: 'border-box' },
  '*': { margin: 0, padding: 0 },
  'html, body': {
    height: '100%'
  },
  body: {
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
    background: '$white',
    color: '$slate700',
    overscrollBehaviorY: 'none'
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
  'input, button, textarea, select': {
    font: 'inherit'
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word'
  },
  '#root, #__next': {
    minHeight: '100vh',
    isolation: 'isolate'
  },
  '.no-js': {
    '*[style]': { opacity: '1 !important', transform: 'none !important' },
    '.slide-in': { height: '368px !important' }
  },
  p: {
    margin: '0',
    padding: '0'
  },
  img: { maxWidth: '100%', margin: '0', padding: '0', borderRadius: '25px' },
  a: { display: 'inline-block', textDecoration: 'none', color: 'inherit' },
  ul: {
    margin: 0,
    listStyleType: 'none',
    listStylePosition: 'outside',
    listStyleImage: 'none'
  },
  li: { paddingLeft: '0', marginBottom: '0.8rem' },
  pre: {
    margin: '0',
    marginBottom: '1.6rem',
    fontSize: '0.85rem',
    lineHeight: 1.42,
    overflow: 'auto',
    wordWrap: 'normal',
    padding: '1.6rem',
    background: code,
    color: text.code
  },
  "pre[class*='language-']": {
    background: `${code} !important`,
    fontSize: '0.95em !important',
    color: text.code
  },
  blockquote: {
    padding: '0 0 0 20px',
    margin: '0px 0px 12px 8px',
    borderLeft: `4px solid ${accent}`,
    '*:last-of-type': { margin: '0', padding: '0' }
  },
  '.hljs-comment': { color: text.comment },
  '.hljs-bullet': { color: text.punctuation },
  '.hljs-string': { color: text.string },
  '.hljs-keyword, .hljs-name, .hljs-link': { color: text.tag },
  '.hljs-attr': { color: text.code },
  '.language-yaml': {
    '.hljs-attr': { color: text.tag },
    '.hljs-string': { color: text.code }
  },
  '::selection': {
    background: '#ffab7f !important',
    color: '$slate800 !important'
  },
  '::-webkit-scrollbar-track': {
    borderRadius: '4px',
    backgroundColor: '#bcd2dc'
  },
  '::-webkit-scrollbar': {
    width: '6px'
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: '#7e9cab'
  }
})

const Global = () => {
  useGlobalStyles()
  return null
}

export default Global
