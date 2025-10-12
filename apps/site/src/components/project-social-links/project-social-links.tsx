import { Box } from '@jaxson/ui/box'
import { GutterContent } from 'components/gutter-content'
import { SocialLink } from 'components/social-link'
import type { Repo } from 'data/github'
import { getLinkName, getNpmLink, getRepoType } from 'utils'
import { gutter, linkBlock } from './project-social-link.css'

type ProjectSocialLinksProps = {
  repo: Repo
}

export const ProjectSocialLinks: React.FC<ProjectSocialLinksProps> = ({
  repo
}) => {
  const npmLink = getNpmLink(repo)
  const shouldShift = !npmLink && !repo.homepage
  return (
    <Box
      pt="$300"
      pl="$1600"
      flex="1"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      data-shift={shouldShift}
      className={linkBlock}
    >
      <Box
        pr="$300"
        display="flex"
        rowGap="$150"
        flexDirection="column"
        width="100%"
        flex="1"
      >
        {!!npmLink && (
          <SocialLink href={npmLink} type="npm">
            <Box as="span">npm</Box>
          </SocialLink>
        )}
        <SocialLink href={repo.url} type="github">
          GitHub
        </SocialLink>
        {repo.homepage && (
          <>
            {!!npmLink ? (
              <Box as="span" aria-hidden="true" height="$400" />
            ) : (
              <Box as="span" aria-hidden="true" height="$0" />
            )}
            <SocialLink href={repo.homepage || '#'} type={getRepoType(repo)}>
              {getLinkName(repo)}
            </SocialLink>
          </>
        )}
      </Box>
    </Box>
  )
}

export const ProjectSocialLinksGutter: React.FC<ProjectSocialLinksProps> = ({
  repo
}) => (
  <GutterContent top="10px" className={gutter}>
    <ProjectSocialLinks repo={repo} />
  </GutterContent>
)
