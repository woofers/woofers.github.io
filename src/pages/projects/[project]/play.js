import Page from 'components/page'
import { getMarkdownFile, getMarkdownFileNames } from 'data/local'
import Game from 'components/game'

const Projects = ({ project }) => {
  const meta = project.meta
  const { title, icon, landscape, lang, game, placeholder } = meta
  const iconMode = meta.icon_mode
  const iconType = meta.icon_type
  const ludumDare = meta.ludum_dare
  return (
    <Page title={title}>
      <Game
        title={title}
        src={game}
        portrait={landscape === 'nil'}
        instruction={project.content}
        lang={lang}
        ludumDare={ludumDare}
        placeholder={placeholder}
      />
    </Page>
  )
}

export const getStaticProps = ({ params }) => {
  const { project } = params
  const file = getMarkdownFile('content/projects', project)
  const buttons = []
  return { props: { project: file, title: file.meta?.title ?? '', buttons } }
}

export const getStaticPaths = () => {
  const files = getMarkdownFileNames('content/projects')
  return {
    paths: files.map(project => ({ params: { project } })),
    fallback: false
  }
}

export default Projects
