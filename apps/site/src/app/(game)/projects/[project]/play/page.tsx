import { Box } from '@jaxson/ui/box'
import Game from 'components/game'
import { Mdx } from 'components/mdx-components'
import { ProjectDescription } from 'components/project-description'
import { SlideLink } from 'components/slide-button'
import { allProjects } from 'content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

  return (
    <Box>
      <SlideLink
        href={`/projects/${project.slugAsParams}`}
        altLabel={'<-- Back'}
        ariaLabel={`Back to ${project.title}`}
        marginBottom="$400"
      >
        {project.title}
      </SlideLink>
      <Box
        as="h2"
        fontSize={{
          mobile: '12px',
          tablet: '15px'
        }}
        fontWeight="medium"
        color="$textPrimary"
        pb={{
          mobile: '$100',
          tablet: '$200'
        }}
      >
        <ProjectDescription>{project.description}</ProjectDescription>
      </Box>
      <Box pt="$600" pb="$1600">
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
      </Box>
    </Box>
  )
}

export default ProjectsPlayPage
