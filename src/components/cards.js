import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import withLocation from './with-location'

const makeItem = i => ({ id: i, subtitle: i, title: i })

const items = [
  makeItem(1),
  makeItem(2),
  makeItem(3),
  makeItem(4),
]

const Card = styled(motion.div)`
  cursor: pointer;
  border-radius: 25px;
  display: inline-flex;
  background: #fff;
  &[data-open=true] {
    cursor: default;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  box-shadow: rgba(0, 0, 0, 0.10) 0px 5px 15px 0px;
`

const C = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 30px;
  grid-template-rows: repeat(2, 200px);
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

const Cards = ({ location }) => {
  const [selectedId, setSelectedId] = useState()
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
          <>
            <Overlay onClick={() => setSelectedId(null)} />
            <Container onClick={() => setSelectedId(null)}>
              <Card layoutId={selectedId} data-open>
                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
              </Card>
            </Container>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
    </C>
  )
}

export default withLocation(Cards)
