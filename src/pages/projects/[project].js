import { getRepo, getRepos } from 'data/github'
import { Markdown, removeBadges } from '../../components/markdown'
import Org from 'components/org'
import ProjectLink from 'components/project-link'
import { mutateRepoNames, type } from 'utils/repo'
import Title from 'components/title'
import { styled } from 'emotion'

const exclude = [
  ['discord-jam-2', 'DOGE: BOIS'],
  ['woofers3d', 'Woofers 3D'],
  ['ludum-dare-44', 'ALIEN, e x p a n s i o n .'],
  ['react-pico-8', 'React PICO-8'],
  ['react-yat', 'React YAT'],
  ['opengraph-api'],
  ['org-invoice-template'],
  ['react-ludum-dare'],
  ['woofers.github.io'],
  ['kangaroo-country'],
  ['chess'],
  ['resume'],
  ['java-formatter'],
  ['battlesnake-2018'],
  ['battlesnake-java-template'],
  ['libgdx-tools-installer'],
  ['challenger-deep-rofi'],
  ['dotfiles'],
  ['k9-krew'],
  ['course-codes-bugs'],
  ['noto-emoji-react'],
  ['react-chameleon-theme-color'],
  ['qmk-indicator'],
  ['quefrency-case'],
]

const Flex = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.breakpoint}) {
    display: flex;
    justify-content: space-between;
  }
`

const Projects = ({ project, repo }) => {
  const { fullName } = repo
  mutateRepoNames([{ node: repo }], exclude)
  const md = repo?.readme
  const org = repo?.readmeOrg
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
          <Markdown content={md.text} repo={repo} filters={[removeBadges]} />
        )}
      </div>
    </>
  )
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
    paths: names.map(name => ({ params: { project: name } })),
    fallback: false,
  }
}

export default Projects
