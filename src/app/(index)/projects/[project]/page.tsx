import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Mdx } from 'components/mdx-components'
import { Divider, Text } from 'components/styled'
import { getRepo, getRepos } from 'data/github'
import Subtitle from 'components/subtitle'
import Title from 'components/title'
import { getMetadata, getRepoType } from 'utils'
import ContentContainer from 'components/content-container'
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

const ProjectsPage = async ({ params }: ProjectProps) => {
  const data = await params
  const repo = await getRepo(data.project)

  if (!repo) {
    notFound()
  }

  const buttons = [
    ...(repo.homepage
      ? [
          {
            key: getRepoType(repo),
            name: 'View Demo',
            link: repo.homepage,
            showText: true,
            divider: true
          }
        ]
      : []),
    {
      key: 'github',
      name: 'GitHub',
      link: repo.url,
      external: true
    }
  ]

  return (
    <ContentContainer data={buttons} back="/">
      <Title className="text-morph">{repo.fullName}</Title>
      <Subtitle>{repo.description}</Subtitle>
      <Divider />
      {!!repo.code && <Mdx code={repo.code} meta={{ project: data.project }} />}
    </ContentContainer>
  )
}

export default ProjectsPage
