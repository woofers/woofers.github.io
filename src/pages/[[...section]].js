import React from 'react'
import SEO from 'components/seo'
import { styled } from 'emotion'
import Me from 'sections/me'
import { getRepos } from 'data/github'

const projectsNav = repos =>
  repos.map(({ name, fullName }) => ({
    href: `/projects/${name}/`,
    children: fullName,
  }))

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    justify-content: flex-start;
    padding: 20px 20px 0;
  }
`

const Index = ({ repos }) => {
  const projects = projectsNav(repos || [])
  return (
    <Page>
      <SEO />
      <Me projects={projects} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const repos = await getRepos()
  const names = repos.map(({ name, fullName }) => ({ fullName, name }))
  return {
    props: { repos: names },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { section: [] } }, { params: { section: ['projects'] } }],
    fallback: false,
  }
}

Index.nav = false

export default Index
