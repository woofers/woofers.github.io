import { getRepo, getRepos } from 'data/github'

const Projects = ({ project, repo }) => {
  console.log(repo)
  return `name: ${project}`
}

export const getStaticProps = async ({ params, ...rest }) => {
  const { project } = params
  const data = await getRepo(project)
  const repo = data.user.repository
  return { props: { project, repo } }
}

export const getStaticPaths = async () => {
  const data = await getRepos()
  const repos = data.user.repositories.edges.map(({ node }) => node)
  const names = repos.map(({ name }) => name)
  return {
    paths: names.map(name => ({ params: { project: name }})),
    fallback: false
  }
}

export default Projects
