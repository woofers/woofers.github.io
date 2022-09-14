import dynamic from 'next/dynamic'

const Markdown = dynamic(() => import('./content'))

export default Markdown
