import Head from 'next/head'
import { styled } from 'stitches'
import Colors from 'features/colors'
import Typography from 'components/typography'
import TypographyBlock from 'features/typography'
import { Inline, Stack, Box, Flex } from 'components/box'
import Button from 'components/button'
import Link from 'components/link'
import InfoCard from 'layout/info-card'
import image from 'images/me_2048_80.webp'

const Container = styled(Box, {
  margin: '0 auto 200px',
  maxWidth: '1280px'
})

const Grid = styled(Box, {
  display: 'grid',
  gridGap: '140px 64px',
  gridTemplateColumns: '250px repeat(2, 420px)'
})

const Image = styled('img', {
  transform: 'rotate(355deg)',
  mx: '$7',
  minWidth: '200px',
  minHeight: '200px',
  maxWidth: '200px',
  maxHeight: '200px',
  objectPosition: '-46% 30%',
  objectFit: 'contain',
  br: '$4'
})

const Header = styled('header', {
  pt: '100px'
})

const Home = () => {
  return (
    <Container>
      <Header>
        <Image src={image.src} />
        <Typography css={{ px: '$7', pt: '$7', pb: '$5' }} type="h6">
          Jaxson <Inline css={{ color: '$gray300' }}>Van Doorn</Inline>
        </Typography>
        <Flex css={{ px: '$7', gap: '0 $3', color: '$gray500' }}>
          <Typography type="subtitle1">@jaxsonvandoorn</Typography>
          <Typography type="subtitle1">Developer</Typography>
          <Typography type="subtitle1">He/Him</Typography>
          <Typography type="subtitle1">Victoria, Canada</Typography>
        </Flex>
        <Typography css={{ px: '$7', py: '$5' }} type="body1">
          React Developer
        Software developer, interested in: Computer Graphics, User Experience & Language Design
        </Typography>
      </Header>
      <Grid>
        <Typography css={{ px: '$7', py: '$7' }} type="h3">
          Work
        </Typography>
        <Typography css={{ px: '$7', py: '$7', color: '$gray300' }} type="h3">
          Projects
        </Typography>
        <InfoCard title="Making waves in React" subtitle="A story for the ages">
          <Typography type="subtitle1">
            Our story starts when Woofers, the world famous dog,{' '}
            <Link href="#">ascends from the junk yar</Link> to become one of the
            worlds{`'`} largest crypto barons. The rest, as they say, is
            history.
          </Typography>
        </InfoCard>
        <InfoCard title="React Wavify" subtitle="+177 stars, 99k downloads">
          <Typography type="subtitle1">
            Our story starts when Woofers, the world famous dog,{' '}
            <Link href="#">ascends from the junk yar</Link> to become one of the
            worlds{`'`} largest crypto barons. The rest, as they say, is
            history.
          </Typography>
        </InfoCard>
        <Typography css={{ px: '$7', py: '$7', color: '$gray300' }} type="h3">
          Blog
        </Typography>
        <InfoCard
          title="NPM package deployment using YAML GitHub Actions"
          subtitle="August 20, 2019"
        >
          <Typography type="subtitle1">
            Recently GitHub announced that GitHub Actions will be moving away
            from the original HCL syntax in-favour of a YAML format similar to
            Travis CI and Bitbucket Pipelines. This means that HCL style actions
            will no longer work after September 30, 2019. It is possible to
            migrate using a migration script however in-some cases it may be
            required to reconfigure.
          </Typography>
        </InfoCard>
        <InfoCard
          title="Using Anchors in Bitbucket Markdown Documents"
          subtitle="October 22, 2018"
        >
          <Typography type="subtitle1">
            Using Markdown to write content is a joy; gone are the days of
            clunky and slow word processors. Leveraging HTML tags for complete
            control over your document when needed and falling back to a simple
            and constant syntax for simpler operations works great. Most VCS
            hosting platforms will recognize the extension and render it. For
            larger documents typically organizing sections using a table of
            contents with anchors is an easy and streamlined process.
          </Typography>
        </InfoCard>
      </Grid>
      <Box>
        <Button type="primary" href="#" aria-current>
          Home
        </Button>
        <Button type="primary" href="#">
          Projects
        </Button>
        <Button type="primary" href="#">
          Blog
        </Button>
      </Box>
      <Box>
        <Button type="secondary" href="#" aria-current>
          Home
        </Button>
        <Button type="secondary" href="#">
          Projects
        </Button>
        <Button type="secondary" href="#">
          Blog
        </Button>
      </Box>
      <Box>
        <Button type="minimal" href="#" aria-current>
          Home
        </Button>
        <Button type="minimal" href="#">
          Projects
        </Button>
        <Button type="minimal" href="#">
          Blog
        </Button>
      </Box>
      <Colors />
      <TypographyBlock />
    </Container>
  )
}

export default Home
