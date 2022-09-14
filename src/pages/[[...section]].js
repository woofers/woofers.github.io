import React from 'react'
import SEO from 'components/seo'
import Page from 'components/page'
import { styled, Typography, Flex } from 'jxsn'
import { getRepos } from 'data/github'
import Collapsible from 'components/collapsible'
import { FaNpm } from 'react-icons/fa'
import { RiStarSLine } from 'react-icons/ri'

const formatStars = value => {
  if (!value || value <= 0) return ''
  return `${value}+`
}

const formatDownloads = value => {
  if (!value || value <= 0) return ''
  if (value < 1000) return `${value}+`
  const text = `${value}`
  const thousand = text.substring(0, text.length - 3)
  return `${thousand}k+`
}

const projectsNav = repos =>
  repos.map(({ name, fullName, stars, topics, ...rest }) => ({
    ...rest,
    topics: topics.nodes?.map(({ topic }) => topic.name),
    stars: stars.totalCount,
    href: `/projects/${name}/`,
    children: fullName
  }))

const TextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px 0',
  '@sm': {
    position: 'sticky',
    top: 0,
    maxHeight: '416px'
  }
})

const Name = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: '$2 0',
  '@sm': {
    gap: '$3 0'
  }
})

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))',
  position: 'relative',
  gridGap: '16px 52px',
  '@sm': {
    gridTemplateColumns: 'minmax(0px, 0.92fr) minmax(0px, 1fr)'
  }
})

const Photo = styled('div', {
  background: '#e9eef4',
  backgroundImage: 'url(/me/jaxson.webp)',
  backgroundPosition: '100% 50%',
  transition: 'background-image 0.25s ease-in-out',
  backgroundSize: '100%',
  br: '35%',
  boxShadow: '0.3px -0.4px 0px 2px #dde5ec',
  minWidth: '68px',
  minHeight: '68px',
  width: '68px',
  height: '68px',
  '@sm': {
    minWidth: '90px',
    minHeight: '90px',
    width: '90px',
    height: '90px'
  }
})

const posts = [
  {
    href: '/blog/yaml-github-actions/',
    children: 'YAML GitHub Actions',
    description: 'Aug 20, 2019'
  },
  {
    href: '/blog/anchors-in-bitbucket/',
    children: 'Anchors in Bitbucket Markdown',
    description: 'Oct 22, 2018'
  }
]

const Index = ({ repos }) => {
  const repositories = projectsNav(repos || [])
  const projects = repositories.filter(
    project =>
      !project.topics.includes('game') && project.children !== 'Woofers 3D'
  )
  const games = repositories.filter(
    game => game.topics.includes('game') || game.children === 'Woofers 3D'
  )
  return (
    <Page>
      <SEO />
      <Flex direction="column" css={{ gap: '40px 0', height: '100%' }}>
        <Flex
          justify="between"
          align={{ '@initial': 'start', '@sm': 'normal' }}
          css={{ flex: '0 0 60px', pl: '$1', pr: '$3', '@sm': { pr: 0 } }}
        >
          <Typography
            noMargin
            type={{ '@initial': 'body2', '@sm': 'button' }}
            as="span"
            css={{
              maxWidth: '152px',
              display: 'block',
              opacity: 0.7,
              pt: '$2',
              '@sm': { pt: 0, maxWidth: 'unset', display: 'block', opacity: 1 }
            }}
          >
            frontend engineer building compact quality libraries
          </Typography>
          <Flex align="center" css={{ gap: '0px 16px', height: '60px' }}>
            <Name>
              <Typography
                noMargin
                type={{ '@initial': 'h4', '@sm': 'h3' }}
                as="span"
              >
                Jaxson
              </Typography>
              <Typography
                noMargin
                type={{ '@initial': 'button', '@sm': 'h6' }}
                as="span"
              >
                Van Doorn
              </Typography>
            </Name>
            <Photo />
          </Flex>
        </Flex>
        <Flex direction="column" justify="flex-start" css={{ flex: 1 }}>
          <Container>
            <Flex direction="column" css={{ gap: '16px 0' }}>
              <Typography type="h6" as="span" noMargin>
                Projects
              </Typography>
              <Collapsible
                items={projects.map(project => ({
                  key: project.children,
                  href: project.href,
                  description: project.description,
                  children: (
                    <Flex justify="between" css={{ width: '100%' }} align="end">
                      <Typography
                        css={{ whiteSpace: 'nowrap', color: '#6e7783' }}
                        type={{ '@initial': 'button', '@sm': 'h6' }}
                        as="span"
                        noMargin
                      >
                        {project.children}{' '}
                      </Typography>
                      <Flex css={{ gap: '0 4px', height: '16px' }}>
                        {formatStars(project.stars) && (
                          <Flex css={{ color: '$gray700' }}>
                            <Typography type="button" as="span" noMargin>
                              {formatStars(project.stars)}
                            </Typography>{' '}
                            <RiStarSLine />
                          </Flex>
                        )}
                        {formatDownloads(project.downloads) && (
                          <Flex css={{ color: '#c12127' }}>
                            <Typography type="button" as="span" noMargin>
                              {formatDownloads(project.downloads)}
                            </Typography>{' '}
                            <FaNpm />
                          </Flex>
                        )}
                      </Flex>
                    </Flex>
                  )
                }))}
              />
              <Typography type="h6" as="span" noMargin>
                Games
              </Typography>
              <Collapsible
                items={games.map(game => ({
                  key: game.children,
                  href: game.href,
                  description: game.description,
                  children: (
                    <Flex justify="between" css={{ width: '100%' }} align="end">
                      <Typography
                        css={{ whiteSpace: 'nowrap', color: '#6e7783' }}
                        type={{ '@initial': 'button', '@sm': 'h6' }}
                        as="span"
                        noMargin
                      >
                        {game.children}{' '}
                      </Typography>
                      <Flex css={{ gap: '0 4px', height: '16px' }}>
                        {formatStars(game.stars) && (
                          <Flex css={{ color: '$gray700' }}>
                            <Typography type="button" as="span" noMargin>
                              {formatStars(game.stars)}
                            </Typography>{' '}
                            <RiStarSLine />
                          </Flex>
                        )}
                        {formatDownloads(game.downloads) && (
                          <Flex css={{ color: '#c12127' }}>
                            <Typography type="button" as="span" noMargin>
                              {formatDownloads(game.downloads)}
                            </Typography>{' '}
                            <FaNpm />
                          </Flex>
                        )}
                      </Flex>
                    </Flex>
                  )
                }))}
              />
              <Typography type="h6" as="span" noMargin>
                Blog
              </Typography>
              <Collapsible
                items={posts.map(post => ({
                  key: post.children,
                  href: post.href,
                  description: post.description,
                  children: (
                    <Flex justify="between" css={{ width: '100%' }} align="end">
                      <Typography
                        css={{ whiteSpace: 'nowrap', color: '#6e7783' }}
                        type={{ '@initial': 'button', '@sm': 'h6' }}
                        as="span"
                        noMargin
                      >
                        {post.children}{' '}
                      </Typography>
                      <Flex css={{ gap: '0 4px', height: '16px' }} />
                    </Flex>
                  )
                }))}
              />
            </Flex>
            <TextWrapper>
              <Typography type="h6" as="span" noMargin>
                Me
              </Typography>
              <Typography type="body1" as="span" noMargin>
                Hey I{`'`}m <span style={{ fontWeight: 600 }}>Jaxson</span> - a
                twenty-something developer who{`'`}s trying to make modern
                software products slightly less broken.
              </Typography>
              <Typography type="body1" as="p" noMargin>
                Currently my main area of interest and focus is{' '}
                <span style={{ fontWeight: 600 }}>React development</span> and
                other modern web tooling.{' '}
                <span style={{ opacity: 0.5 }}>
                  In my past life I was a Java developer.
                </span>
              </Typography>
              <Typography type="body1" as="p" noMargin>
                I currently maintain a{' '}
                <span style={{ fontStyle: 'italic' }}>few</span> small libraries
                and open source projects. Outside software I enjoy obscure films
                and spending time with my dog Maxine.
              </Typography>
            </TextWrapper>
          </Container>
        </Flex>
      </Flex>
    </Page>
  )
}

export const getStaticProps = async () => {
  const repos = await getRepos()
  return {
    props: { repos }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { section: [] } }, { params: { section: ['projects'] } }],
    fallback: false
  }
}

Index.nav = false

export default Index
