import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import withLocation from './with-location'
import Card from './card'

const C = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 30px;
  grid-template-rows: repeat(2, 250px);
`

const Container = styled.div`
  position: absolute;
  padding: 5rem 12rem;
  width: 100%;
  height: 430px;
  z-index: 2;
`

const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(100px);
`

const Cards = ({ items = [], location }) => {
  const [selectedId, setSelectedId] = useState()
  const item = items.find(({ id }) => id === selectedId)
  return (
    <C>
    <AnimateSharedLayout type="crossfade">
      {items.map(({ id, children, ...rest }) => (
        <Card layoutId={id} onClick={() => setSelectedId(id)} key={id} {...rest}>
          {children}
        </Card>
      ))}
      <AnimatePresence>
        {(selectedId || selectedId === 0) && (({ id, children, ... rest}) => (
          <>
            <Overlay onClick={() => setSelectedId(null)} />
            <Container onClick={() => setSelectedId(null)}>
              <Card layoutId={id} data-open {...rest}>
                {children}
                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
              </Card>
            </Container>
          </>
        ))(item)}
      </AnimatePresence>
    </AnimateSharedLayout>
    </C>
  )
}

export default withLocation(Cards)
