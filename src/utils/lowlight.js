import { lowlight } from 'lowlight/lib/core'
import c from 'highlight.js/lib/languages/c'
import markdown from 'highlight.js/lib/languages/markdown'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'

lowlight.registerLanguage('c', c)
lowlight.registerLanguage('markdown', markdown)
lowlight.registerLanguage('javascript', javascript)
lowlight.registerLanguage('xml', xml)
lowlight.registerLanguage('yaml', yaml)

export default lowlight
