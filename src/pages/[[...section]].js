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
  grid-template-columns: 1fr;
  justify-items: flex-end;
  grid-template-areas:
    'sidebar' 'cards';
  grid-gap: 0 15vw;
  @media only screen and (max-width: 1500px) {
    grid-template-columns: 1fr;
    grid-template-areas:
    'sidebar' 'cards';
    grid-gap: 0 7.8vw;
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
