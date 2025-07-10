import { notFound } from 'next/navigation'
import { allProjects } from 'content'
import type { Metadata } from 'next'
import { Mdx } from 'components/mdx-components'
import { Text, Divider } from 'components/styled'
import Game from 'components/game'
import Subtitle from 'components/subtitle'
import Title from 'components/title'
import ContentContainer from 'components/content-container'
import { getMetadata } from 'utils'
import { getViewport } from 'utils/metadata'

type ProjectProps = {
  params: Promise<{
    project: string
  }>
}

const getProjectFromParams = async (
  params: Awaited<ProjectProps['params']>
) => {
  const slug = params?.project
  const project = allProjects.find(project => project.slugAsParams === slug)

  if (!project) {
    return null
  }

  return project
}

export const generateMetadata = async ({
  params
}: ProjectProps): Promise<Metadata> => {
  const data = await params
  const project = await getProjectFromParams(data)

  if (!project) {
    return {}
  }

  return getMetadata({ title: project.title })
}

export const generateViewport = () => getViewport()

export const generateStaticParams = async (): Promise<
  Awaited<ProjectProps['params']>[]
> => {
  return allProjects.map(project => ({
    project: project.slugAsParams
  }))
}

const ProjectsPlayPage = async ({ params }: ProjectProps) => {
  const data = await params
  const project = await getProjectFromParams(data)

  if (!project) {
    notFound()
  }

  const buttons = [
    ...(project.github
      ? [
          {
            key: 'github',
            name: 'GitHub',
            link: project.github,
            external: true
          }
        ]
      : [])
  ]

  return (
    <ContentContainer data={buttons} back={`/projects/${data.project}`}>
      <Title className="text-morph">{project.title}</Title>
      <Subtitle>{project.description}</Subtitle>
      <Divider />
      <Game
        portrait={project.landscape === 'nil'}
        lang={project.lang}
        title={project.title}
        src={project.game}
        ludumDare={project.ludum_dare}
        placeholder={project.placeholder}
      >
        <Mdx code={project.body.code} />
      </Game>
    </ContentContainer>
  )
}

export default ProjectsPlayPage
