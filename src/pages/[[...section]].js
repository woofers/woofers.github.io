import React, { useEffect, useState } from 'react'
import SEO from 'components/seo'
import { styled } from 'emotion'
import Logo from 'components/logo'
import Me from 'sections/me'
import Contact from 'sections/contact'
import { ContentCards } from 'components/grid-cards'
import { getRepos } from 'data/github'
import Nav from 'components/nav'

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, 1fr) 1fr;
  justify-items: flex-end;
  grid-template-areas:
    'sidebar cards'
    'sidebar cards';
  grid-gap: 0 15vw;
  @media only screen and (max-width: 1500px) {
    grid-gap: 0 7.8vw;
  }
  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'sidebar'
      'cards';
  }
`

const Sidebar = styled.div`
  grid-area: sidebar;
  grid-template-areas:
    'splash'
    'contact';
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60vh 30vh;
  grid-gap: 10vh 0;
  position: sticky;
  top: 0;
  max-height: 100vh;
  @media only screen and (max-width: 950px) {
    width: 100%;
    position: static;
    max-height: none;
    grid-template-rows: auto;
    grid-gap: 0;
  }
`

const Cards = styled.div`
  width: 100%;
  grid-area: cards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const blog = [
  {
    href: '/blog/',
    children: 'Blog',
  },
]

const nav = [
  {
    href: '/projects/',
    children: 'Projects',
  },
]

const projectsNav = repos =>
  repos.map(({ name, fullName }) => ({
    href: `/projects/${name}/`,
    children: fullName,
  }))

const Index = ({ repos }) => {
  const projects = projectsNav(repos || [])
  return (
    <>
      <SEO />
      <Grid>
        <Me />
        <Cards>
          <Nav items={nav} />
          <Nav items={projects} />
          <Nav items={blog} />
        </Cards>
      </Grid>
    </>
  )
}

export const getStaticProps = async () => {
  const repos = await getRepos()
  const names = repos.map(({ name, fullName }) => ({ fullName, name }))
  console.log(names)
  return {
    props: { repos: names },
  }
}

export const getStaticPaths = async () => {
  return { paths: [{ params: { section: [] } }], fallback: false }
}

Index.nav = false

export default Index
