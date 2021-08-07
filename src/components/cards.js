import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import withLocation from './with-location'
import Card from './card'

const ROWS = 2
const CARD_WIDTH = '585px'
const CARD_HEIGHT = '250px'
const CARD_GAP = '30px'
const HEIGHT = `calc(${ROWS} * ${CARD_HEIGHT} + ((${ROWS} - 1) * ${CARD_GAP}))`

const EXPANDED_WIDTH = '300px'
const EXPANDED_TOP = '40px'
const EXPANDED_BOTTOM = '70px'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${CARD_WIDTH});
  grid-gap: ${CARD_GAP};
  grid-template-rows: repeat(4, ${CARD_HEIGHT});
`

const Container = styled.div`
  position: absolute;
  padding: calc((530px - ${CARD_HEIGHT}) / 2 - ${EXPANDED_TOP}) calc((100vw - ${CARD_WIDTH} - ${EXPANDED_WIDTH}) / 2) calc((530px - ${CARD_HEIGHT}) / 2  - ${EXPANDED_BOTTOM} + ((100vh - 225px) - 530px));
  width: 100%;
  height: calc(100vh - 225px);
  z-index: 2;
  left: 0;
`

const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(100px);
`

const Cards = ({ items = [], location }) => {
  const [selectedId, setSelectedId] = useState()
  const item = items.find(({ id }) => id === selectedId)
  return (
    <Grid>
      <AnimateSharedLayout type="crossfade">
        {items.map(({ id, children, ...rest }) => (
          <Card
            layoutId={id}
            onClick={() => setSelectedId(id)}
            key={id}
            {...rest}
          >
            {children}
          </Card>
        ))}
        <AnimatePresence>
          {(selectedId || selectedId === 0) &&
            (({ id, children, ...rest }) => (
              <>
                <Overlay onClick={() => setSelectedId(null)} />
                <Container onClick={() => setSelectedId(null)}>
                  <Card layoutId={id} data-open {...rest}>
                    {children}
                    {false && (
                      <motion.button onClick={() => setSelectedId(null)}>
                        Close
                      </motion.button>
                    )}
                  </Card>
                </Container>
              </>
            ))(item)}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Grid>
  )
}

export default withLocation(Cards)
