'use client'
import { Box, MotionBox } from '@jaxson/ui/box'
import { SlideButtonControlled } from 'components/slide-button'
import { ViewTransition } from 'components/view-transition'
import { allPosts } from 'content'
import { useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

export const BlogSection = () => {
  const [expanded, setExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  return (
    <MotionBox
      initial={{ opacity: 0, filter: 'blur(4px)', y: -40, skewX: 10 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0, skewX: 0 }}
      style={{ transformStyle: 'preserve-3d', transformOrigin: 'top center' }}
      transition={{ delay: 0.7, damping: 10, stiffness: 20 }}
    >
      <Box mt="$800" mb="$1200">
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
            ariaLabel="Toggle posts"
            altLabel={!expanded ? 'Posts' : '<-- Less Posts'}
            width="156px"
            height="24px"
            isHovered={isHovered}
            setHovered={setIsHovered}
          >
            {!expanded ? 'View Posts -->' : 'Posts'}
          </SlideButtonControlled>
          {expanded && (
            <MotionBox
              initial={
                shouldReduceMotion
                  ? { opacity: 0, height: 0 }
                  : { opacity: 0, filter: 'blur(4px)', y: -40, skewX: 10 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1, height: 'auto' }
                  : { opacity: 1, filter: 'blur(0px)', y: 0, skewX: 0 }
              }
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'top center'
              }}
              transition={
                shouldReduceMotion
                  ? { delay: 0, duration: 0.3 }
                  : { delay: 0, damping: 10, stiffness: 20 }
              }
            >
              <Box display="flex" flexDirection="column" gap="$0">
                {allPosts.map(post => (
                  <Box
                    key={post.slugAsParams}
                    as={Link}
                    href={`/blog/${post.slugAsParams}`}
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
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      gap="$300"
                    >
                      <Box flex="1">
                        <ViewTransition
                          name={post.slugAsParams}
                          template={name => `blog-title-${name}`}
                          default="slide-in"
                          enabled={true}
                        >
                          <Box
                            as="h3"
                            fontSize={{
                              mobile: '$xs',
                              tablet: '$md'
                            }}
                            fontWeight="$medium"
                            color="$textPrimary"
                            mb={{
                              mobile: '$050',
                              tablet: '$100'
                            }}
                            fontFamily="$mono"
                            letterSpacing={{
                              mobile: '-0.2px',
                              tablet: '-0.7px'
                            }}
                          >
                            {post.title}
                          </Box>
                        </ViewTransition>
                        <Box
                          fontSize={{
                            mobile: '$xs',
                            tablet: '$sm'
                          }}
                          color="$neutral400"
                          lineHeight="$relaxed"
                          display="-webkit-box"
                          WebkitLineClamp="2"
                          WebkitBoxOrient="vertical"
                          overflow="hidden"
                        >
                          {post.description}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          )}
        </Box>
      </Box>
    </MotionBox>
  )
}
