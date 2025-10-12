'use client'
import { Box, MotionBox } from '@jaxson/ui/box'
import { BadgeContainer, DownloadsBadge, StarsBadge } from 'components/badges'
import { ProjectDescription } from 'components/project-description'
import { SlideButtonControlled } from 'components/slide-button'
import { ViewTransition } from 'components/view-transition'
import type { Repo } from 'data/github'
import { useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { projectItem } from './_projects.css'

const ProjectItem: React.FC<{
  project: Repo
  className?: string
  enabled?: boolean
}> = ({ project, className, enabled }) => (
  <Box
    key={project.name}
    as={Link}
    href={`/projects/${project.name}`}
    display="block"
    textDecoration="none"
    color="inherit"
    px={{
      mobile: '$200',
      tablet: '$400'
    }}
    py={{
      mobile: '$300',
      tablet: '$400'
    }}
    borderRadius="$md"
    cursor="pointer"
    className={projectItem}
  >
    <Box
      display="flex"
      flexDirection="column"
      gap={{
        mobile: '$150',
        tablet: '$100'
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="$300"
      >
        <ViewTransition
          name={project.name}
          template={name => `project-title-${name}`}
          default="slide-in"
          enabled={enabled}
        >
          <Box
            as="h3"
            fontSize={{
              mobile: '$xs',
              tablet: '$md'
            }}
            fontWeight="$medium"
            color="$textPrimary"
            fontFamily="$mono"
            letterSpacing={{
              mobile: '-0.2px',
              tablet: '-0.7px'
            }}
            className={className}
          >
            {project.name}
          </Box>
        </ViewTransition>
        <ViewTransition
          name={project.name}
          template={name => `project-badges-${name}`}
          default="slide-in"
          enabled={enabled}
        >
          <BadgeContainer className={className}>
            <DownloadsBadge downloads={project.downloads} />
            <StarsBadge stars={project.stars.totalCount} />
          </BadgeContainer>
        </ViewTransition>
      </Box>
      <Box
        fontSize={{
          mobile: '$xs',
          tablet: '$sm'
        }}
        color="$neutral400"
        lineHeight="$relaxed"
      >
        <ProjectDescription>{project.description}</ProjectDescription>
      </Box>
    </Box>
  </Box>
)

export const ProjectsSection: React.FC<{ projects: Repo[] }> = ({
  projects
}) => {
  const [loaded, setLoaded] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { topProjects, otherProjects } = useMemo(
    () =>
      projects.reduce(
        (acc, project) => {
          if (['use-eye-dropper', 'react-wavify'].includes(project.name)) {
            acc.topProjects.push(project)
          } else {
            acc.otherProjects.push(project)
          }
          return acc
        },
        { topProjects: [] as Repo[], otherProjects: [] as Repo[] }
      ),
    [projects]
  )

  return (
    <MotionBox
      initial={
        shouldReduceMotion
          ? { opacity: 0, filter: 'blur(0px)', y: 0, skewX: 0 }
          : { opacity: 0, filter: 'blur(4px)', y: -20, skewX: 20 }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1, filter: 'blur(0px)', y: 0, skewX: 0 }
          : { opacity: 1, filter: 'blur(0px)', y: 0, skewX: 0 }
      }
      style={
        shouldReduceMotion
          ? {}
          : { transformStyle: 'preserve-3d', transformOrigin: 'top center' }
      }
      transition={
        shouldReduceMotion
          ? { delay: 0.4, duration: 0.3 }
          : { delay: 0.4, damping: 30, stiffness: 120 }
      }
      onAnimationComplete={() => setLoaded(true)}
    >
      <Box>
        <Box
          px={{
            mobile: '$400',
            tablet: '$800'
          }}
          py="$400"
          borderRadius="$md"
        >
          <SlideButtonControlled
            onClick={() => setExpanded(!expanded)}
            ariaPressed={expanded}
            ariaLabel="Toggle projects"
            altLabel={expanded ? '<-- Less Projects' : 'More Projects -->'}
            width="156px"
            height="24px"
            isHovered={isHovered}
            setHovered={setIsHovered}
          >
            Projects
          </SlideButtonControlled>
          <Box display="flex" flexDirection="column" gap="$0">
            {topProjects.map(project => (
              <ProjectItem
                key={project.name}
                project={project}
                enabled={loaded}
              />
            ))}
          </Box>
          {expanded && (
            <MotionBox
              layout
              initial={
                shouldReduceMotion
                  ? { opacity: 0, height: 0 }
                  : {
                      opacity: 0,
                      height: 0,
                      filter: 'blur(4px) grayscale(1) brightness(0.2)',
                      x: -50,
                      skewX: -10
                    }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1, height: 'auto' }
                  : {
                      opacity: 1,
                      height: 'auto',
                      filter: 'blur(0px) grayscale(0) brightness(1)',
                      x: 0,
                      skewX: 0
                    }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0, height: 0 }
                  : {
                      opacity: 0,
                      height: 0,
                      filter: 'blur(4px) grayscale(1) brightness(0.8)',
                      skewX: 10
                    }
              }
              style={{
                overflow: 'hidden',
                height: 'auto',
                willChange: 'height'
              }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.3,
                ease: 'easeInOut'
              }}
            >
              <Box display="flex" flexDirection="column" gap="$0">
                {otherProjects.map(project => (
                  <ProjectItem
                    key={project.name}
                    project={project}
                    enabled={loaded}
                  />
                ))}
              </Box>
            </MotionBox>
          )}
          {!expanded && (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.3,
                ease: 'easeInOut'
              }}
            >
              <Box
                px={{
                  mobile: '$200',
                  tablet: '$400'
                }}
                color="$neutral400"
                fontSize={{
                  mobile: '$xxs',
                  tablet: '$xs'
                }}
                as="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
                onClick={() => {
                  setExpanded(expanded => !expanded)
                  setIsHovered(false)
                }}
                cursor="pointer"
                aria-pressed={expanded}
                aria-label="Toggle projects"
              >
                {'->'} more
              </Box>
            </MotionBox>
          )}
        </Box>
      </Box>
    </MotionBox>
  )
}
