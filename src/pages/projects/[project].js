import Page from 'components/page'
import { getRepo, getRepos } from 'data/github'
import { useMarkdown, Markdown, removeBadges } from 'components/markdown'
import ProjectLink from 'components/project-link'
import { type } from 'utils/repo'
import Title from 'components/title'
import { styled, Typography } from 'ruffsponsive'

const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  '@sm': {
    display: 'block',
    padding: '20px 0',
  },
})

const Buttons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '> a:not(:last-of-type)': {
    marginRight: '15px',
  },
})

const Project = ({ project, repo }) => {
  const { fullName } = repo
  const md = repo?.readme?.text
  const { content } = useMarkdown(md, { repo, filters: [removeBadges] })
  return (
    <Page title={fullName}>
      <Flex>
        <Title paddingX="0" paddingY="0">
          {fullName}
        </Title>
        <Buttons>
          <ProjectLink href={repo.url} type="github" />
          {repo.homepage && (
            <ProjectLink href={repo.homepage} type={type(repo)} />
          )}
        </Buttons>
      </Flex>
      <div>
        <Markdown content={content} />
      </div>
    </Page>
  )
}

export const getStaticProps = async ({ params, ...rest }) => {
  const { project } = params
  const repo = await getRepo(project)
  return { props: { project, repo } }
}

export const getStaticPaths = async () => {
  const repos = await getRepos()
  const names = repos.map(({ name }) => name)
  return {
    paths: names.map(name => ({ params: { project: name } })),
    fallback: false,
  }
}

export default Project
