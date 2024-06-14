import { Box, Text, Row, Stack } from 'components/styled'
import Logo from 'components/logo'
import Link from 'next/link'
import { allPosts } from 'content'
import { getRepos, type Repo } from 'data/github'
import { parseDate, parseAndFormatDate, toUrl, getMetadata } from 'utils'
import Links from 'components/links'
import { clsx } from 'cva'
import { getViewport } from 'utils/metadata'
import React from 'react'

const ProjectTitle: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => (
  <span
    className={clsx(
      'min-w-0 box-border m-0 font-bold [font-size:32px]',
      '[transition:transform_0.2s_ease] group-hover:text-[#FBE0A0] group-hover:[transform:translate(20px,0px)]',
      'group-focus:text-[#FBE0A0] group-focus:[transform:translate(20px,0px)]'
    )}
  >
    {children}
  </span>
)

const ProjectText: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => (
  <div
    className={clsx(
      'min-w-0 box-border m-0 [font-size:18px] [height:0px] overflow-y-hidden',
      '[transition:height_0.3s_cubic-bezier(0.165,0.84,0.44,1)_0s,opacity_0.3s] group-hover:text-[#FBE0A0] group-hover:[height:25px] ',
      'group-focus:text-[#FBE0A0] group-focus:[height:25px]'
    )}
    tabIndex={-1}
  >
    {children}
  </div>
)

const SectionTitle: React.FC<{
  children?: React.ReactNode
  margin?: 'none' | 'normal'
}> = ({ children, margin = 'normal' }) => (
  <h2 className="min-w-0 box-border m-0 mt-4 mb-0 [transform-origin:top_left] [transform:scale(0.88)] sm:mt-10 text-[#fbd4cb] text-xl font-medium">
    {children}
  </h2>
)

const Profile: React.FC<Nothing> = () => (
  <Box className="block [mix-blend-mode:lighten] opacity-75">
    <img
      className="block rounded-full border-2 border-white sm:hidden"
      src="/me/jaxson-new-small.webp"
      alt="Photo of Jaxson"
      width={76}
      height={76}
    />
    <img
      className="hidden rounded-full border-2 border-white sm:block md:hidden"
      src="/me/jaxson-new-small.webp"
      alt="Photo of Jaxson"
      width={112}
      height={112}
    />
    <img
      className="[flex:0_0_120px] rounded-full border-2 border-white hidden md:block"
      src="/me/jaxson-new.webp"
      alt="Photo of Jaxson"
      width={120}
      height={120}
    />
  </Box>
)

export const metadata = getMetadata()

export const viewport = getViewport()

const starsText = (value: number) => {
  const num = formatStars(value, 5)
  if (!num) return null
  return <Text as="div">{num} Stars</Text>
}

const formatStars = (value: number, limit = 0) => {
  if (!value || value <= limit) return ''
  return `${value}+`
}

const formatDownloads = (value: number) => {
  if (!value || value <= 0) return ''
  if (value < 1000) return `${value}+`
  const text = `${value}`
  const thousand = text.substring(0, text.length - 3)
  return `${thousand}k+`
}

const transformRepos = (repos: Repo[]) =>
  repos.map(({ name, fullName, stars, topics, ...rest }) => ({
    ...rest,
    fullName,
    topics: (topics?.nodes ?? []).map(({ topic }) => topic.name),
    stars: stars.totalCount,
    href: `/projects/${name}/`,
    children: fullName
  }))



// offwhite text #fad3ca
const Home = async () => {
  const fullRepos = await getRepos()
  const repos = transformRepos(fullRepos)
  const { allRepos, allGames } = repos.reduce(
    (acc, project) => {
      let allRepos = acc.allRepos
      let allGames = acc.allGames
      if (
        project.topics.includes('game') ||
        project.children === 'Woofers 3D'
      ) {
        allGames = [...allGames, project]
      } else {
        allRepos = [...allRepos, project]
      }
      return { allRepos, allGames }
    },
    { allRepos: [], allGames: [] } as Record<
      'allGames' | 'allRepos',
      typeof repos
    >
  )
  return (
    <Stack gutter="1.5" className="sm:gap-y-6">



    <Row justifyContent="spaceBetween" alignItems="center">
      <Row
        gutter="10"
        alignItems="flexStart"
        className="pt-3"
      >
        <Profile />
        <Box className="flex items-center">
          <Logo className="pt-[18px] text-[#feece8] ml-3 lg:ml-0" accentClassName="text-[#fbd0c8]" header />
        </Box>
      </Row>

      <Row
        gutter="8"
        justifyContent="flexEnd"
      >
        <Links className="text-[#fde6e1]" hoverStyle="hover:[background:rgba(233,95,63,0.3)]" />
      </Row>
      </Row>

      <Box className="ml-[160px]">

        <Box display="flex">
          <Stack gutter="5" className="[flex:1]">
            <SectionTitle>Projects</SectionTitle>
            <Stack
              gutter="3"
              inline
              className="text-white rounded-xl w-full lg:[max-width:600px]"
            >
              {[...allRepos]
                .sort((a, b) => b.downloads - a.downloads)
                .map(({ fullName, description, link, stars, downloads }) => (
                  <Link href={toUrl(link)} key={link} className="block group">
                    <Box as="div">
                      <Box
                        display="flex"
                        justifyContent="spaceBetween"
                        className="gap-x-1"
                      >
                        <ProjectTitle>{fullName}</ProjectTitle>
                        <Text
                          as="div"
                          className="[transition:height_0.12s_cubic-bezier(0.165,0.84,0.44,1)_0s,opacity_0.3s] opacity-0 group-hover:opacity-100"
                        >
                          {formatStars(stars)} Stars -{' '}
                          {formatDownloads(downloads)} Downloads
                        </Text>
                      </Box>
                      <ProjectText>{description}</ProjectText>
                    </Box>
                  </Link>
                ))}
            </Stack>
          </Stack>
          <Stack gutter="5" className="[flex:0_0_540px]">
            <SectionTitle>Games</SectionTitle>
            <Stack
              gutter="3"
              inline
              className="text-white rounded-xl w-full lg:[max-width:600px]"
            >
              {allGames.map(({ fullName, description, link, stars }) => (
                <Link href={toUrl(link)} key={link} className="block group">
                  <Box as="div">
                    <Box
                      display="flex"
                      justifyContent="spaceBetween"
                      className="gap-x-1"
                    >
                      <ProjectTitle>{fullName}</ProjectTitle>

                      <Text
                        as="div"
                        className="[transition:height_0.12s_cubic-bezier(0.165,0.84,0.44,1)_0s,opacity_0.3s] opacity-0 group-hover:opacity-100"
                      >
                        {starsText(stars)}
                      </Text>
                    </Box>
                    <ProjectText>{description}</ProjectText>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Box>
        <Row
          gutter="0"
          justifyContent="end"
          alignItems="center"
          className="flex-wrap"
        >
          <Row gutter="0" justifyContent="center" className="flex-grow">
            <Box className="px-2.5 pt-4 pb-0 sm:pb-2">
              <SectionTitle margin="none">Posts</SectionTitle>
            </Box>
          </Row>
          <Stack
            gutter="2"
            inline
            className="text-white [margin-left:auto] mt-3 px-4 py-5 rounded-xl border border-white dark-mode:border-neutral-800"
          >
            {[...allPosts]
              .sort(
                (a, b) =>
                  parseDate(b.date).getTime() - parseDate(a.date).getTime()
              )
              .map(({ title, slug, date }) => (
                <Link href={toUrl(slug)} key={slug}>
                  <Box
                    as="span"
                    display="inlineFlex"
                    flexDirection="column"
                    className="sm:flex-row"
                  >
                    <Text fontWeight="bold" as="span">
                      {title}
                    </Text>
                    <Text as="span">
                      <span className="inline sm:hidden">
                        {'\u00A0'}
                        {'➢'}
                        {'\u00A0'}
                      </span>
                      <span className="hidden sm:inline">
                        {'\u00A0'}
                        {'-'}
                        {'\u00A0'}
                      </span>
                      <span>{parseAndFormatDate(date)}</span>
                    </Text>
                  </Box>
                </Link>
              ))}
          </Stack>
        </Row>

      </Box>
    </Stack>
  )
}

export default Home
