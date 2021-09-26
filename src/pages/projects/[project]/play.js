import { useMarkdown } from 'components/markdown'
import { getMarkdownFile, getMarkdownFileNames } from 'data/local'
import Game from 'components/game'
import GameTitle from 'components/game-title'

const Projects = ({ project }) => {
  const { content, meta } = useMarkdown(project.content)
  const { title, icon, landscape, lang, game, placeholder } = meta
  const iconMode = meta.icon_mode
  const iconType = meta.icon_type
  const ludumDare = meta.ludum_dare
  return (
    <>
      <GameTitle
        title={title}
        icon={icon}
        iconMode={iconMode}
        iconType={iconType}
      />
      <Game
        title={title}
        src={game}
        portrait={landscape === 'nil'}
        instruction={content}
        lang={lang}
        ludumDare={ludumDare}
        placeholder={placeholder}
      />
    </>
  )
}

export const getStaticProps = ({ params, ...rest }) => {
  const { project } = params
  return { props: { project: getMarkdownFile('content/projects', project) } }
}

export const getStaticPaths = () => {
  const files = getMarkdownFileNames('content/projects')
  return {
    paths: files.map(project => ({ params: { project } })),
    fallback: false,
  }
}

export default Projects
