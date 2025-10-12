import { Box } from '@jaxson/ui/box'
import { GutterWrapper } from 'components/gutter-content'
import { MdxWithTableOfContents } from 'components/mdx-components'
import { ProjectDescription } from 'components/project-description'
import { ProjectHeader } from 'components/project-header'
import { ProjectSocialLinksGutter } from 'components/project-social-links'
import { getRepo, getRepos } from 'data/github'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMetadata } from 'utils'
import { getViewport } from 'utils/metadata'

type ProjectProps = {
  params: Promise<{
    project: string
  }>
}

export const generateMetadata = async ({
  params
}: ProjectProps): Promise<Metadata> => {
  const data = await params
  const { project } = data
  const repo = await getRepo(project)

  if (!repo) {
    return {}
  }

  return getMetadata({ title: repo.fullName })
}

export const generateViewport = () => getViewport()

export const generateStaticParams = async (): Promise<
  Awaited<ProjectProps['params']>[]
> => {
  const repos = await getRepos()
  return repos.map(repo => ({
    project: repo.name
  }))
}

const shouldHideSecondLine = (name: string) =>
  !['react-wavify', 'ludum-dare-44', 'react-pico-8'].includes(name)

const ProjectsPage = async ({ params }: ProjectProps) => {
  const data = await params
  const repo = await getRepo(data.project)

  if (!repo) {
    notFound()
  }

  return (
    <GutterWrapper>
      <MdxWithTableOfContents
        code={repo.code}
        meta={{
          project: data.project,
          shouldHideFirstLine: true,
          shouldHideSecondLine: shouldHideSecondLine(data.project),
          removeTocFirstLine: true
        }}
      >
        <ProjectHeader repo={repo} />
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
          <ProjectDescription>{repo.description}</ProjectDescription>
        </Box>
      </MdxWithTableOfContents>
      <ProjectSocialLinksGutter repo={repo} />
    </GutterWrapper>
  )
}

export default ProjectsPage
