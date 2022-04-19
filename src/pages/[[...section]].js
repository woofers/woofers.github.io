import React from 'react'
import SEO from 'components/seo'
import { styled, Typography } from 'ruffsponsive'
import Me from 'sections/me'
import { getRepos } from 'data/github'
import Link from 'next/link'

const projectsNav = repos =>
  repos.map(({ name, fullName, ...rest }) => ({
    ...rest,
    href: `/projects/${name}/`,
    children: fullName,
  }))

const Page = styled('div', {
  position: 'relative',
})

const ContentWrapper = styled('div', {
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  px: '20vw',
  py: '8vw',
})

const Content = styled('div', {
  background: 'rgba(246, 248, 250, 0.8)',
  color: 'rgb(53, 55, 57)',
  width: '100%',
  height: '100%',
  mx: 'auto',
  br: '10px',
  px: '$7',
  py: '$7',
  $$shadowColor: '206deg 14% 54%',
  $$shadowElevationLow: `-0.5px 0.6px 1px hsl($$shadowColor / 0.19),
    -0.9px 1.1px 1.8px -0.7px hsl($$shadowColor / 0.29),
    -2px 2.4px 4.1px -1.3px hsl($$shadowColor / 0.4)`,
  boxShadow: '$$shadowElevationLow',
})

const TextWrapper = styled('div', {})

const Name = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
})

const ProjectsWrapper = styled('div', {
  width: '100%',
  py: '12px',
  display: 'flex',
  flexDirection: 'column',
  color: '#b0b3b6',
  gap: '4px 0',
})

const Project = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0 12px',
})

const Index = ({ repos }) => {
  const projects = projectsNav(repos || [])
  console.log(projects)
  return (
    <Page>
      <SEO />
      <ContentWrapper>
        <Content>
          <Name>
            <Typography type="h3" as="span">
              Jaxson
            </Typography>
            <Typography type="h6" as="span">
              Van Doorn
            </Typography>
          </Name>
          <TextWrapper>
            <Typography type="body1" as="p">
              Me Hi all, I{`'`}m Jaxson: a twenty-something developer who{`'`}s
              trying to make modern software products slightly less broken.
            </Typography>
            <Typography type="body1" as="p">
              Me Currently my main area of interest and focus is Front-end React
              development and other modern web tooling. In my past life I was a
              Java developer.
            </Typography>
            <Typography type="body1" as="p">
              Me I currently maintain React Wavify (~100k) and many other open
              source projects. Outside software I enjoy obscure films and
              spending time with my dog Maxine. - Jaxson
            </Typography>
          </TextWrapper>
          <Typography type="h5" as="span">
            Projects
          </Typography>
          <ProjectsWrapper>
            {projects.map(project => (
              <Link
                key={`project-${project.children}`}
                href={project.href}
                passHref
              >
                <Project as="a">
                  <Typography
                    css={{ whiteSpace: 'nowrap' }}
                    type="h6"
                    as="span"
                  >
                    {project.children}
                  </Typography>
                  <Typography
                    css={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    type="body1"
                    as="span"
                  >
                    {project.description}
                  </Typography>
                </Project>
              </Link>
            ))}
          </ProjectsWrapper>
          <Typography type="h5" as="span">
            Contact
          </Typography>
        </Content>
      </ContentWrapper>
    </Page>
  )
}

export const getStaticProps = async () => {
  const repos = await getRepos()
  return {
    props: { repos },
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
