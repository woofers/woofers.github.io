import React from 'react'
import { styled, useMediaQuery } from 'emotion'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useRouter } from 'next/router'
import Card from './card'

const ROWS = 2
const CARD_WIDTH = '585px'
const CARD_HEIGHT = '250px'
const CARD_HEIGHT_MOBILE = '175px'
const CARD_GAP = '30px'
const CARD_GAP_MOBILE = '20px'
const HEIGHT = `calc(${ROWS} * ${CARD_HEIGHT} + ((${ROWS} - 1) * ${CARD_GAP}))`

const EXPANDED_WIDTH = '300px'
const EXPANDED_TOP = '40px'
const EXPANDED_BOTTOM = '70px'

const FullWidth = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${CARD_WIDTH};
  grid-gap: ${CARD_GAP};
  grid-template-rows: repeat(4, ${CARD_HEIGHT});
  justify-items: center;
  @media only screen and (max-width: 1360px) {
    align-self: center;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.breakpoint}) {
    grid-template-columns: 1fr;
    grid-gap: ${CARD_GAP_MOBILE};
    grid-template-rows: repeat(4, ${CARD_HEIGHT_MOBILE});
    width: 100%;
  }
`

const Cards = ({ items = [], children }) => {
  const router = useRouter()
  return (
      <FullWidth
        layoutId={'cards'}
        initial={{ x: 0, y: -500, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
      {children}
      <Grid>
        {items.map(({ id, children, ...rest }) => (
          <Card layoutId={id} key={id} {...rest}>
            {children}
          </Card>
        ))}
      </Grid>
    </FullWidth>
  )
}

export default Cards
