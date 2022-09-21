import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { m as motion, LazyMotion } from 'framer-motion'
import { styled, VisuallyHidden, Typography } from 'jxsn'
import useMediaQuery from 'components/use-media-query'
import Description from './description'

const loadFeatures = () =>
  import('components/animation.js').then(res => res.default)

const top = 1
const middle = 0.94
const bottom = 0.88

const getHeight = mobile => {
  if (mobile) return 68 - 10
  return 76
}

const getClosedHeight = mobile => {
  if (mobile) return getHeight(mobile) + 20
  return getHeight(mobile) + 20
}

const getGap = mobile => {
  if (mobile) return 9
  return 10
}

const getScale = custom => {
  if (custom === 0) return top
  if (custom === 1) return middle
  if (custom === 2) return bottom
  return Math.max(1 - custom * 0.06, 0)
}

const getColor = custom => {
  if (custom === 0) return '#edf0f7'
  if (custom === 1) return '#d7e0ea'
  if (custom === 2) return '#d1dae5'
  return '#d1dae5'
}

const shift = {
  open: ({ mobile }) => ({
    transformOrigin: `${getClosedHeight(mobile) / 2}px ${
      getClosedHeight(mobile) / 2
    }px`,
    scale: 1.005,
    y: `-3px`
  }),
  closed: ({ mobile }) => ({
    transformOrigin: `${getClosedHeight(mobile) / 2}px ${
      getClosedHeight(mobile) / 2
    }px`,
    y: `0px`,
    scale: 1
  })
}

const container = {
  open: ({ custom, mobile }) => ({
    maxHeight: '100%',
    marginBottom: `${custom * getGap(mobile)}px`
  }),
  closed: ({ mobile }) => ({
    maxHeight: `${getClosedHeight(mobile)}px`,
    marginBottom: `0px`
  })
}

const variants = {
  closed: ({ custom, mobile }) => ({
    y: `${custom * getGap(mobile) - getHeight(mobile) * custom}px`,
    x: 0,
    scale: custom < 3 ? getScale(custom) : 0,
    backgroundColor: getColor(custom),
    opacity: custom < 3 ? 1 : 0,
    zIndex: 100 - custom,
    pointerEvents: 'none',
    boxShadow: `-0.2px 0.3px 0.6px hsl(206deg 14% 54% / 0.21), -0.5px 0.6px 1.4px -0.9px hsl(206deg 14% 54% / 0.31), -0.7px 0.8px 3.7px -1.5px hsl(206deg 14% 54% / 0.42)`
  }),
  hover: ({ custom, mobile }) => ({
    y: `${custom * 17 - getHeight(mobile) * custom - 4}px`,
    boxShadow: `-0.5px 0.6px 1px hsl(206deg 14% 54% / 0.19), -0.9px 1.1px 1.8px -0.7px hsl(206deg 14% 54% / 0.29), -2px 2.4px 4.1px -1.3px hsl(206deg 14% 54% / 0.4)`
  }),
  open: ({ custom, mobile }) => ({
    y: `${
      custom * (getHeight(mobile) + getGap(mobile)) - getHeight(mobile) * custom
    }px`,
    x: 0,
    scale: 1,
    backgroundColor: getColor(0),
    opacity: 1,
    zIndex: 100 - custom,
    pointerEvents: 'all',
    boxShadow: `-0.2px 0.3px 0.6px hsl(206deg 14% 54% / 0.10), -0.5px 0.6px 1.4px -0.9px hsl(206deg 14% 54% / 0.16), -0.7px 0.8px 3.7px -1.5px hsl(206deg 14% 54% / 0.21)`,
    boxShadow: 'inset 0px 0px 0px 2px #dde5ec'
  })
}

const Collapse = styled('div', {
  m: '-12px'
})

const Container = styled('div', {
  py: '12px',
  px: '12px',
  overflowY: 'hidden',
  overflowX: 'hidden'
})

const OpenWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  willChange: 'margin-bottom'
})

const ProjectsWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  py: '0',
  display: 'flex',
  flexDirection: 'column',
  color: '$gray400',
  gap: '0'
})

const Project = styled('div', {
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px 0',
  padding: '10px 12px',
  br: '11px',
  height: `${getHeight(true)}px`,
  background: '#e9eef4',
  '@sm': {
    gap: '12px 0',
    padding: '16px 24px',
    br: '14px',
    height: `${getHeight(false)}px`
  }
})

const OpenButton = styled('button', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  zIndex: 105
})

const ShiftContainer = styled('div', {})

const TextOverflow = styled('span', {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
  display: 'block'
})

const Collapsible = ({ items }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const [expanded, setExpanded] = useState(false)
  const [hover, setHover] = useState(false)
  const open = () => {
    setExpanded(true)
    ref.current?.focus()
  }
  const ref = useRef()
  const desktop = useMediaQuery('(min-width: 640px)')
  const mobile = !desktop || !mounted
  return (
    <LazyMotion features={loadFeatures}>
      <Collapse>
        <Container>
          <ShiftContainer
            as={motion.div}
            initial={hover && !expanded ? 'open' : 'closed'}
            animate={hover && !expanded ? 'open' : 'closed'}
            variants={shift}
            custom={{ mobile }}
          >
            <OpenWrapper
              as={motion.div}
              initial={expanded ? 'open' : 'closed'}
              animate={expanded ? 'open' : 'closed'}
              variants={container}
              custom={{ custom: items.length, mobile }}
            >
              <ProjectsWrapper>
                {items.map((item, index) => (
                  <Link key={`project-${item.key}`} href={item.href} passHref>
                    <Project
                      ref={index === 0 ? ref : undefined}
                      as={motion.a}
                      initial={expanded ? 'open' : hover ? 'hover' : 'closed'}
                      animate={expanded ? 'open' : hover ? 'hover' : 'closed'}
                      variants={variants}
                      custom={{ custom: index, mobile }}
                      tabIndex={expanded ? 0 : -1}
                      aria-hidden={!expanded}
                    >
                      {item.children}
                      <Typography
                        type={{ '@initial': 'body2', '@sm': 'body1' }}
                        as="span"
                        css={{ width: '100%' }}
                        noMargin
                      >
                        <TextOverflow>
                          <Description text={item.description} />
                        </TextOverflow>
                      </Typography>
                    </Project>
                  </Link>
                ))}
              </ProjectsWrapper>
              {!expanded && (
                <OpenButton
                  onClick={open}
                  onBlur={() => setHover(false)}
                  onFocus={() => setHover(true)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <VisuallyHidden>{items[0].children}</VisuallyHidden>
                </OpenButton>
              )}
            </OpenWrapper>
          </ShiftContainer>
        </Container>
      </Collapse>
    </LazyMotion>
  )
}

export default Collapsible
