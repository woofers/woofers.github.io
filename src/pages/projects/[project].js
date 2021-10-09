import Page from 'components/page'
import { getRepo, getRepos } from 'data/github'
import { useMarkdown, Markdown, removeBadges } from 'components/markdown'
import ProjectLink from 'components/project-link'
import { type } from 'utils/repo'
import Title from 'components/title'
import { styled } from 'emotion'

const Flex = styled.div`
  padding: 20px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    display: flex;
    justify-content: space-between;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > a:not(:last-of-type) {
    margin-right: 15px;
  }
`

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
