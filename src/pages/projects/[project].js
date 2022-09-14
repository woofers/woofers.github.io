import Page from 'components/page'
import { getRepo, getRepos } from 'data/github'
import Markdown from 'components/markdown'
import { type } from 'utils/repo'

const Project = ({ repo }) => {
  const { fullName } = repo
  const md = repo?.readme?.text
  return (
    <Page title={fullName}>
      <Markdown content={md} options={{ repo, filters: ['removeBadges'] }} />
    </Page>
  )
}

export const getStaticProps = async ({ params }) => {
  const { project } = params
  const repo = await getRepo(project)
  const buttons = [
    ...(repo.homepage
      ? [
          {
            key: type(repo),
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
  return { props: { project, repo, title: repo.fullName, buttons } }
}

export const getStaticPaths = async () => {
  const repos = await getRepos()
  const names = repos.map(({ name }) => name)
  return {
    paths: names.map(name => ({ params: { project: name } })),
    fallback: false
  }
}

export default Project
