import { Box, Text, Row, Stack } from 'components/styled'
import Logo from 'components/logo'
import Link from 'next/link'
import { allPosts } from 'content'
import { getRepos, type Repo } from 'data/github'
import { parseDate, parseAndFormatDate, toUrl, getMetadata } from 'utils'
import Links from 'components/links'
import { clsx } from 'cva'

const SectionTitle: React.FC<{
  children?: React.ReactNode
  margin?: 'none' | 'normal'
}> = ({ children, margin = 'normal' }) => (
  <Text
    type="plain"
    as="h2"
    font="serif"
    fontWeight="bold"
    className={clsx(
      margin === 'normal' && 'mt-4 [margin-bottom:0px] sm:mt-10 mb-2',
      'italic text-neutral-400 text-2xl font-medium dark:text-neutral-500 sm:not-italic sm:font-bold sm:text-4xl sm:text-zinc-900 sm:dark-mode:text-neutral-600'
    )}
  >
    {children}
  </Text>
)

export const metadata = getMetadata()

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
        gutter="0"
        alignItems="flexStart"
        justifyContent="spaceBetween"
        className="[height:66px]"
      >
        <Logo className="ml-3 lg:ml-0" header />
        <Box className="block grayscale-[20%] md:hidden">
          <img
            className="hidden rounded-xl sm:block"
            src="/me/jaxson-new-small.webp"
            alt="Photo of Jaxson"
            width={112}
            height={112}
          />
          <img
            className="block rounded-xl sm:hidden"
            src="/me/jaxson-new-small.webp"
            alt="Photo of Jaxson"
            width={76}
            height={76}
          />
        </Box>
      </Row>
      <Links />
      <Box>
        <Row gutter="2" className="flex-wrap gap-y-2">
          <Stack
            gutter="2"
            className="flex-grow px-4 py-5 rounded-xl bg-zinc-900 text-zinc-100 card-style dark-mode:bg-zinc-200 dark:text-neutral-600"
          >
            <Text type="h4" as="span" font="serif" fontWeight="medium">
              🛋️ Ergonomic software enthusiast & maker.
            </Text>
            <Text type="h4" as="span" font="serif" fontWeight="medium">
              📦 React package deployer.
            </Text>
          </Stack>
          <Box className="[flex:0_0_200px] grayscale-[20%] hidden md:block">
            <img
              className="rounded-xl"
              src="/me/jaxson-new.webp"
              alt="Photo of Jaxson"
              width={200}
              height={200}
            />
          </Box>
        </Row>
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
            className="[margin-left:auto] mt-3 px-4 py-5 rounded-xl border border-zinc-900 dark-mode:border-neutral-600"
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
        <SectionTitle>Games</SectionTitle>
        <Stack
          gutter="2"
          inline
          className="mt-3 px-4 py-4 rounded-xl bg-zinc-900 text-zinc-100 dark-mode:bg-zinc-200 dark:text-neutral-600 w-full card-style lg:[max-width:540px]"
        >
          {allGames.map(({ fullName, description, link, stars }) => (
            <Link href={toUrl(link)} key={link} className="block">
              <Box as="div">
                <Box
                  display="flex"
                  justifyContent="spaceBetween"
                  className="gap-x-1"
                >
                  <Text fontWeight="bold" as="span">
                    {fullName}
                  </Text>
                  {starsText(stars)}
                </Box>
                <Text as="div">{description}</Text>
              </Box>
            </Link>
          ))}
        </Stack>
        <SectionTitle>Projects</SectionTitle>
        <Stack
          gutter="2"
          inline
          className="mt-3 px-4 py-4 rounded-xl bg-zinc-900 text-zinc-100 dark-mode:bg-zinc-200 dark:text-neutral-600 w-full card-style lg:[max-width:488px]"
        >
          {[...allRepos]
            .sort((a, b) => b.downloads - a.downloads)
            .map(({ fullName, description, link, stars, downloads }) => (
              <Link href={toUrl(link)} key={link} className="block">
                <Box as="div">
                  <Box
                    display="flex"
                    justifyContent="spaceBetween"
                    className="gap-x-1"
                  >
                    <Text fontWeight="bold" as="span">
                      {fullName}
                    </Text>
                    <Text as="div">
                      {formatStars(stars)} Stars - {formatDownloads(downloads)}{' '}
                      Downloads
                    </Text>
                  </Box>
                  <Text as="div">{description}</Text>
                </Box>
              </Link>
            ))}
        </Stack>
      </Box>
    </Stack>
  )
}

export default Home
