import { globalCss } from 'ruffsponsive'

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
  tag: '#fe8c52',
}

const useGlobalStyles = globalCss({
  '*, *::before, *::after': { boxSizing: 'border-box' },
  '*': { margin: 0, padding: 0 },
  'html, body': {
    height: '100%'
  },
  'body': {
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased'
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
    isolation: 'isolate'
  },
  '.no-js': {
    '*[style]': { opacity: '1 !important', transform: 'none !important' },
    '.slide-in': { height: '368px !important' },
  },
  p: {
    margin: '0 0 1.6rem',
    padding: '0',
    'img:first-of-type': { marginRight: '1.6rem' },
    'img:last-of-type': { marginRight: '0px' },
  },
  img: { maxWidth: '100%', margin: '0', padding: '0', borderRadius: '25px' },
  a: { display: 'inline-block', textDecoration: 'none', color: '#000' },
  ul: {
    marginLeft: '1.6rem',
    marginRight: '0',
    marginTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '0',
    marginBottom: '1.6rem',
    listStylePosition: 'outside',
    listStyleImage: 'none',
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
    color: text.code,
  },
  "pre[class*='language-']": {
    background: `${code} !important`,
    fontSize: '0.95em !important',
    color: text.code,
  },
  blockquote: {
    padding: '0 0 0 20px',
    margin: '0 28px 28px 28px',
    borderLeft: `4px solid ${accent}`,
    '*:last-of-type': { margin: '0', padding: '0' },
  },
  '.hljs-comment': { color: text.comment },
  '.hljs-bullet': { color: text.punctuation },
  '.hljs-string': { color: text.string },
  '.hljs-keyword,\n  .hljs-name,\n  .hljs-link': { color: text.tag },
  '.hljs-attr': { color: text.code },
  '.language-yaml': {
    '.hljs-attr': { color: text.tag },
    '.hljs-string': { color: text.code },
  },
  '::selection': {
    background: 'rgba(0, 40, 255, 0.3) !important',
    color: '#314cf0 !important',
  },
})

const Global = () => {
  useGlobalStyles()
  return null
}

export default Global
