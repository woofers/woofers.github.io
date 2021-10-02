import Container from 'components/container'
import { getRepo, getRepos } from 'data/github'
import { useMarkdown, Markdown, removeBadges } from 'components/markdown'
import ProjectLink from 'components/project-link'
import { type } from 'utils/repo'
import Title from 'components/title'
import { styled } from 'emotion'

const Flex = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    display: flex;
    justify-content: space-between;
  }
`

const Projects = ({ project, repo }) => {
  const { fullName } = repo
  const md = repo?.readme?.text
  const { content } = useMarkdown(md, { repo, filters: [removeBadges] })
  return (
    <Container>
      <Flex>
        <Title paddingX="0">{fullName}</Title>
        <div>
          <ProjectLink href={repo.url} type="github" />
          {repo.homepage && (
            <ProjectLink href={repo.homepage} type={type(repo)} />
          )}
        </div>
      </Flex>
      <div>
        <Markdown content={content} />
      </div>
    </Container>
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

export default Projects
