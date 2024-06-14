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
  params: {
    project: string
  }
}

export const generateMetadata = async ({
  params
}: ProjectProps): Promise<Metadata> => {
  const { project } = params
  const repo = await getRepo(project)

  if (!repo) {
    return {}
  }

  return getMetadata({ title: repo.fullName })
}

export const generateViewport = ({ params }: ProjectProps) => getViewport()

export const generateStaticParams = async (): Promise<
  ProjectProps['params'][]
> => {
  const repos = await getRepos()
  return repos.map(repo => ({
    project: repo.name
  }))
}

const ProjectsPage = async ({ params }: ProjectProps) => {
  const repo = await getRepo(params.project)

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
      {!!repo.code && (
        <Mdx code={repo.code} meta={{ project: params.project }} />
      )}
    </ContentContainer>
  )
}

export default ProjectsPage
