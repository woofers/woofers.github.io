import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const makeItem = i => ({ id: i, subtitle: i, title: i })

const items = [
  makeItem(1),
  makeItem(2),
  makeItem(3),
  makeItem(4),
]

const Card = styled(motion.div)`
  border-radius: 25px;
  display: inline-flex;
  background: #fff;
  border: 1px solid #c9c9c9;
  &[data-abs=true] {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

--system-dimension-fontSizeDynamic: 20;
--system-dimension-fontSizeDifference: 0;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.1),0 10px min(calc(1rem * (15 / (var(--system-dimension-fontSizeDynamic) + .167 * var(--system-dimension-fontSizeDifference)))),15px) 0 rgba(0,0,0,.06);
`

const C = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 30px;
  grid-template-rows: repeat(2, 200px);
`

const Container = styled.div`
  position: absolute;
  padding: 8rem;
  width: 100%;
  height: 100%;
`

const Cards = () => {
  const [selectedId, setSelectedId] = useState(null)
  const item = items[selectedId - 1]
  return (
    <C>
    <AnimateSharedLayout type="crossfade">
      {items.map(item => (
        <Card layoutId={item.id} onClick={() => setSelectedId(item.id)} key={item.id}>

        </Card>
      ))}
      <AnimatePresence>
        {(selectedId || selectedId === 0) && (
          <Container>
          <Card layoutId={selectedId} data-abs>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </Card>
          </Container>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
    </C>
  )
}

export default Cards
