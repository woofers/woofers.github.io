import { Box, Text, Row, Stack } from 'components/styled'
import Logo from 'components/logo'
import { allPosts } from 'content'
import { getRepos, type Repo } from 'data/github'
import { parseDate, parseAndFormatDate, toUrl, getMetadata } from 'utils'
import Links from 'components/links'
import { clsx } from 'cva'
import { getViewport } from 'utils/metadata'
import React, { CSSProperties } from 'react'
import { Link } from 'next-view-transitions'

const ProjectTitle: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => (
  <span
    style={{ ['--expand-time' as keyof CSSProperties]: '0.2s' }}
    className={clsx(
      'min-w-0 box-border m-0 font-bold [font-size:26px]',
      '[transition:transform_var(--expand-time)_ease] group-hover:text-[#FBE0A0] group-hover:[transform:translate(20px,0px)] mxl:[font-size:32px]',
      'group-focus:text-[#FBE0A0] group-focus:[transform:translate(20px,0px)]'
    )}
  >
    {children}
  </span>
)

const ProjectText: React.FC<{
  children?: React.ReactNode
  height?: string
  duration?: number
}> = ({ children, height = '25px', duration = 0.3 }) => (
  <div
    style={{
      ['--expand-height' as keyof CSSProperties]: height,
      ['--expand-time' as keyof CSSProperties]: `${duration}s`
    }}
    className={clsx(
      'min-w-0 box-border m-0 [font-size:18px] [height:0px] overflow-y-hidden blur-[1.5px]',
      '[transition:height_var(--expand-time)_cubic-bezier(0.165,0.84,0.44,0.99)_0s,opacity_var(--expand-time)_ease-out,filter_var(--expand-time)_ease-out] group-hover:text-[#FBE0A0] group-hover:[height:var(--expand-height)] group-hover:blur-none',
      'group-focus:text-[#FBE0A0] group-focus:[height:var(--expand-height)] group-focus:blur-none'
    )}
    tabIndex={-1}
  >
    {children}
  </div>
)

const ProjectTag: React.FC<{
  children?: React.ReactNode
  className?: string
  type?: 'star' | 'both'
}> = ({ children, className, type = 'both' }) =>
  !!children ? (
    <Text
      as="div"
      style={{ ['--expand-time' as keyof CSSProperties]: '0.3s' }}
      className={clsx(
        '[transition:opacity_var(--expand-time)_linear] opacity-0 group-hover:opacity-100',
        type === 'both' &&
          'truncate [flex:0_0_96px] max-h-[24px] xmd:[flex:0_1_auto] xmd:[max-height:unset] xmd:[overflow:unset_!important]',
        className
      )}
    >
      {children}
    </Text>
  ) : null

const SectionTitle: React.FC<{
  children?: React.ReactNode
  margin?: 'none' | 'normal'
}> = ({ children, margin = 'normal' }) => (
  <h2 className="min-w-0 box-border m-0 mt-4 mb-0 [transform-origin:top_left] [transform:scale(0.88)] sm:mt-10 text-[#fbd4cb] text-xl font-medium">
    {children}
  </h2>
)

const Profile: React.FC<Nothing> = () => (
  <Box className="block relative w-[120px] h-[120px] group" as="button">
    <Box className="absolute top-0 block [mix-blend-mode:luminosity] opacity-[0.6]">
      <img
        className="block rounded-full border-2 border-white sm:hidden"
        src="/me/jaxson-2025-small.webp"
        alt="Photo of Jaxson"
        width={112}
        height={112}
      />
      <img
        className="[flex:0_0_120px] rounded-full border-2 border-white hidden sm:block"
        src="/me/jaxson-2025.webp"
        alt="Photo of Jaxson"
        width={120}
        height={120}
      />
    </Box>
    <Box className="absolute top-0 block opacity-0 blur-[2px] [transition:opacity_0.3s_ease-in,filter_0.05s_0.2s_ease-in] group-hover:opacity-100 group-focus:opacity-100 group-hover:blur-none group-focus:blur-none">
      <img
        className="block rounded-full border-2 border-white sm:hidden"
        src="/me/jaxson-2025-small.webp"
        alt="Photo of Jaxson"
        width={112}
        height={112}
      />
      <img
        className="[flex:0_0_120px] rounded-full border-2 border-white hidden sm:block"
        src="/me/jaxson-2025.webp"
        alt="Photo of Jaxson"
        width={120}
        height={120}
      />
    </Box>
  </Box>
)

export const metadata = getMetadata()

export const viewport = getViewport({ themeColor: '#f27052' })

const starsText = (
  value: number,
  type: 'div' | 'span' = 'div',
  append = false
) => {
  const num = formatStars(value, 5)
  if (!num) return null
  return (
    <Text
      className={clsx('hidden', type === 'div' ? 'xmd:block' : 'xmd:inline')}
      as={type}
    >
      {num} Stars {append ? '- ' : ''}
    </Text>
  )
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
      <Row
        justifyContent="spaceBetween"
        alignItems="center"
        className="flex-col gap-y-6 xmd:gap-y-0 xmd:flex-row px-6 [max-width:unset] mxl:px-3 xl:px-10 xl:[max-width:1186px] 2xl:px-0 2xl:[max-width:1240px] 3xl:[max-width:1440px]"
      >
        <Row gutter="10" alignItems="flexStart" className="pt-3">
          <Profile />
          <Box className="flex items-center">
            <Logo
              className="pt-[18px] text-[#feece8]"
              accentClassName="text-[#fbd0c8]"
              header
            />
          </Box>
        </Row>

        <Row
          gutter="8"
          justifyContent="flexEnd"
          className="flex-grow [align-self:baseline] xmd:[align-self:unset]"
        >
          <Links
            className="text-[#fde6e1]"
            hoverStyle="hover:[background:rgba(233,95,63,0.3)]"
          />
        </Row>
      </Row>

      <Box className="px-[28px] xl:pl-[160px] xl:pr-0 3xl:px-[160px]">
        <Box display="flex" className="flex flex-col xmd:flex-row">
          <Stack gutter="5" className="xmd:[flex:1_1_auto] xmd:pr-[20px]">
            <SectionTitle>Projects</SectionTitle>
            <Stack
              gutter="3"
              inline
              className="text-white rounded-xl w-full lg:[max-width:600px]"
            >
              {[...allRepos]
                .sort((a, b) => b.downloads - a.downloads)
                .map(({ fullName, description, link, stars, downloads }) => (
                  <Link
                    href={toUrl(link)}
                    key={link}
                    className="block group text-morph"
                  >
                    <Box as="div">
                      <Box
                        display="flex"
                        justifyContent="spaceBetween"
                        className="gap-x-1"
                      >
                        <ProjectTitle>{fullName}</ProjectTitle>
                        <ProjectTag>
                          {starsText(stars, 'span', true)}
                          {formatDownloads(downloads)} Downloads
                        </ProjectTag>
                      </Box>
                      <ProjectText>{description}</ProjectText>
                    </Box>
                  </Link>
                ))}
            </Stack>
          </Stack>
          <Stack gutter="5" className="xmd:[flex:0_1_460px]">
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

                      <ProjectTag>{starsText(stars)}</ProjectTag>
                    </Box>
                    <ProjectText>{description}</ProjectText>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Box>
        <Stack gutter="5">
          <SectionTitle>Posts</SectionTitle>
          <Stack gutter="5" inline className="text-white">
            {[...allPosts]
              .sort(
                (a, b) =>
                  parseDate(b.date).getTime() - parseDate(a.date).getTime()
              )
              .map(({ title, slug, date, description }) => (
                <Link href={toUrl(slug)} key={slug} className="block group">
                  <Box as="div">
                    <Box
                      display="flex"
                      justifyContent="spaceBetween"
                      className="gap-x-1"
                    >
                      <ProjectTitle>{title}</ProjectTitle>

                      <ProjectTag className="pl-8">
                        {parseAndFormatDate(date)}
                      </ProjectTag>
                    </Box>
                    <ProjectText height="82px" duration={0.48}>
                      {description}
                    </ProjectText>
                  </Box>
                </Link>
              ))}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Home
