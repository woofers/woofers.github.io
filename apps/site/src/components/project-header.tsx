import { Box } from '@jaxson/ui/box'
import type { Repo } from 'data/github'
import { BadgeContainer, DownloadsBadge, StarsBadge } from './badges'
import { SlideLink } from './slide-button'
import { ViewTransition } from './view-transition'

type ProjectHeaderProps = {
  repo: Repo
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ repo }) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      gap="$200"
      justifyContent="space-between"
    >
      <ViewTransition
        name={repo.name}
        template={name => `project-title-${name}`}
        default="none"
        share="slide-in"
        enter="none"
      >
        <Box
          mt={{
            mobile: '-4px',
            tablet: '$0'
          }}
        >
          <SlideLink
            href="/"
            altLabel={'<-- Back'}
            ariaLabel="Back to homepage"
            marginBottom="$400"
          >
            {repo.fullName}
          </SlideLink>
        </Box>
      </ViewTransition>
      <ViewTransition
        name={repo.name}
        template={name => `project-badges-${name}`}
        default="none"
        share="slide-in"
        enter="none"
      >
        <BadgeContainer>
          <DownloadsBadge downloads={repo.downloads} />
          <StarsBadge stars={repo.stars.totalCount} />
        </BadgeContainer>
      </ViewTransition>
    </Box>
  )
}
