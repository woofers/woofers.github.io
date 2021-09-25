import { getRepo, getRepos } from 'data/github'
import { Markdown, removeBadges } from 'components/markdown'
import Org from 'components/org'
import ProjectLink from 'components/project-link'
import { mutateRepoNames, type } from 'utils/repo'
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
  const org = repo?.readmeOrg?.text
  return (
    <>
      <Flex>
        <Title>{fullName}</Title>
        <div>
          <ProjectLink href={repo.url} type="github" />
          {repo.homepage && (
            <ProjectLink href={repo.homepage} type={type(repo)} />
          )}
        </div>
      </Flex>
      <div>
        {org && !md ? (
          <Org content={org} repo={repo} />
        ) : (
          <Markdown content={md} repo={repo} filters={[removeBadges]} />
        )}
      </div>
    </>
  )
  return `name: ${project}`
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
