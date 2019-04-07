import { theme as base, rgba } from './base'
import merge from 'lodash.merge'
import cloneDeep from 'lodash.clonedeep'

const light = {
  colors: {
    button: rgba.code(0.015),
    background: '#f6f8fa',
    link: '#ff7757',
    text: '#1e1d1f',
    switchBackground: "#e6cbcb"
  },
  selections: {
    main: rgba.header(0.8)
  },
  comments: 'github-light',
  name: 'light'
}

export default merge(cloneDeep(base), light)
