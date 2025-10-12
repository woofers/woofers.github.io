import { code } from './inline-code'

type ProjectDescriptionProps = {
  children: React.ReactNode
}

const codeRegexp = /<([a-zA-Z0-9]*)>/g

const encodeHtml = (text: string) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const getCode = (children: React.ReactNode) => {
  const text =
    typeof children === 'string' ? children : children?.toString() || ''
  return text.replace(codeRegexp, match => {
    return `<code class="${code}" style="opacity:0.7;background-color:rgba(0,0,0,0)">${encodeHtml(match)}</code>`
  })
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  children
}) => (
  <div
    dangerouslySetInnerHTML={{
      __html: getCode(children)
    }}
  />
)
