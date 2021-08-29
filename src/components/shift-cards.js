import React, { useState } from 'react'
import { styled, useMediaQuery } from 'emotion'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Card from './shift-card'

const ROWS = 2
const CARD_WIDTH = '585px'
const CARD_HEIGHT = '250px'
const CARD_GAP = '30px'
const HEIGHT = `calc(${ROWS} * ${CARD_HEIGHT} + ((${ROWS} - 1) * ${CARD_GAP}))`

const EXPANDED_WIDTH = '300px'
const EXPANDED_TOP = '40px'
const EXPANDED_BOTTOM = '70px'

const Grid = styled.div``

const Cards = ({ items = [], location }) => {
  const [selectedId, setSelectedId] = useState()
  const item = items.find(({ id }) => id === selectedId)
  console.log(item)
  const shift = useMediaQuery('@media only screen and (max-width: 1360px)')
  return (
    <Grid>
      <AnimateSharedLayout type="crossfade">
        {items.map(({ id, children, ...rest }) => (
          <Card
            layoutId={id}
            onClick={() => setSelectedId(id)}
            data-hide={shift && id === selectedId}
            key={id}
            active={id === selectedId}
            {...rest}
          >
            {children}
          </Card>
        ))}
      </AnimateSharedLayout>
    </Grid>
  )
}

export default Cards
