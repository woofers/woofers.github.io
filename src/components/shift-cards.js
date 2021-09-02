import React, { useState } from 'react'
import { styled, useMediaQuery } from 'emotion'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Card from './shift-card'

const Cards = ({ items = [], location }) => {
  const [selectedId, setSelectedId] = useState(items?.[0]?.id)
  const item = items.find(({ id }) => id === selectedId)
  return (
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
  )
}

export default Cards
