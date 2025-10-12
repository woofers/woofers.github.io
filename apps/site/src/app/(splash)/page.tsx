import { Box } from '@jaxson/ui/box'
import { Header } from '@jaxson/ui/header'
import { HeaderText } from 'components/header-text'
import { NowPlaying } from 'components/now-playing'
import { PageContainer } from 'components/page-container'
import { ProfileImage } from 'components/profile-image'
import { SocialLink } from 'components/social-link'
import { ThemeToggle } from 'components/theme-toggle'
import { getRepos } from 'data/github'
import type React from 'react'
import { Suspense } from 'react'
import { BlogSection } from './_blog'
import { ProjectsSection } from './_projects'

export default async function Home() {
  const projects = await getRepos()
  return (
    <>
      <Header
        above={
          <Box display="flex" width="100%" justifyContent="flex-end">
            <NowPlaying />
          </Box>
        }
      >
        <Box
          px={{
            mobile: '$400',
            tablet: '$800'
          }}
          py={{
            mobile: '$300',
            tablet: '$400'
          }}
        >
          <Box
            display="flex"
            rowGap="$100"
            flexDirection="column"
            justifyContent="center"
          >
            <Box fontSize="$xl" display="flex" alignItems="center" gap="$200">
              <ProfileImage />
              <HeaderText />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="end"
                flex="1"
                fontSize="$sm"
                gap="$100"
              >
                <Box display="flex" flexDirection="column" gap="$100">
                  <SocialLink href="https://github.com/woofers" type="github">
                    GitHub
                  </SocialLink>
                  <SocialLink href="https://www.npmjs.com/~woofers" type="npm">
                    npm
                  </SocialLink>
                </Box>
              </Box>
            </Box>
            <Box
              fontWeight="$light"
              fontSize={{
                mobile: '13px',
                tablet: '$md'
              }}
              color="$neutral400"
              pl="$200"
              fontFamily="$mono"
              aria-hidden
            >
              {'↑'} me.webp
            </Box>
          </Box>
        </Box>

        <Suspense fallback={null}>
          <Box
            position="absolute"
            right={{
              mobile: '2px',
              tablet: '5px'
            }}
            bottom={{
              mobile: '3px',
              tablet: '6px'
            }}
          >
            <ThemeToggle />
          </Box>
        </Suspense>
      </Header>
      <PageContainer padding="none">
        <ProjectsSection projects={projects} />
        <BlogSection />
      </PageContainer>
    </>
  )
}
