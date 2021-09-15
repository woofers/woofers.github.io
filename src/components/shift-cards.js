import React, { useState } from 'react'
import { styled, useMediaQuery } from 'emotion'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useRouter } from 'next/router'
import Card from './shift-card'

const Wrapper = styled(motion.div)`
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.breakpoint}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Cards = ({ show = true, intro, items = [], location }) => {
  const router = useRouter()
  const selectedId = router?.query?.section?.[1] || 'intro'
  const item = items.find(({ id }) => id === selectedId)
  const setSelectedId = id => {
    router.replace(`/me/${id}`, undefined, { shallow: true })
  }
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <Wrapper
            key={'cards'}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{
              type: 'spring',
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
              delay: intro ? 2.95 : 0,
            }}
          >
            {items.map(({ id, children, ...rest }) => (
              <Card
                onClick={() => setSelectedId(id)}
                active={id === selectedId}
                key={id}
                id={id}
                {...rest}
              >
                {children}
              </Card>
            ))}
          </Wrapper>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Cards
