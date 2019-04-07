import { theme as base } from './base'
import cloneDeep from 'lodash.clonedeep'

const theme = {
  ...cloneDeep(base),
  name: 'dark'
}

theme.name = 'dark'

export default theme
