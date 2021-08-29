import React, { useState } from 'react'
import { styled, useMediaQuery } from 'emotion'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Card from './shift-card'

const Grid = styled.div``

const Cards = ({ items = [], location }) => {
  const [selectedId, setSelectedId] = useState()
  const item = items.find(({ id }) => id === selectedId)
  let index = items.findIndex(({ id }) => id === selectedId)
  if (index === -1) {
    index = items.length
  }
  console.log(index)
  const shift = useMediaQuery('@media only screen and (max-width: 1360px)')
  return (
    <Grid>
      <AnimateSharedLayout>
        {items.map(({ id, children, ...rest }) => (
          <Card
            onClick={() => setSelectedId(id)}
            active={id === selectedId}
            key={id}
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
