import React, { useState } from 'react'
import { styled, useMediaQuery } from 'emotion'
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
  height: ${HEIGHT};
  @media only screen and (max-width: 1360px) {
    align-self: center;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.small.breakpoint}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`

const Container = styled.div`
  position: absolute;
  padding: calc((530px - ${CARD_HEIGHT}) / 2 - ${EXPANDED_TOP})
    calc((100vw - ${CARD_WIDTH} - ${EXPANDED_WIDTH}) / 2)
    calc(
      (530px - ${CARD_HEIGHT}) / 2 - ${EXPANDED_BOTTOM} +
        ((100vh - 225px) - 530px)
    );
  width: 100%;
  height: calc(100vh - 225px);
  z-index: 2;
  left: 0;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.small.breakpoint}) {
    padding-left: 25px;
    padding-right: 25px;
  }
`

const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const Cards = ({ items = [], location }) => {
  const [selectedId, setSelectedId] = useState()
  const item = items.find(({ id }) => id === selectedId)
  const shift = useMediaQuery("@media only screen and (max-width: 1360px)")
  return (
    <Grid>
      <AnimateSharedLayout type="crossfade">
        {items.map(({ id, children, ...rest }) => (
          <Card
            layoutId={id}
            onClick={() => setSelectedId(id)}
            data-hide={shift && id === selectedId}
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
                <Overlay
                  onClick={() => setSelectedId(null)}
                  initial={{
                    backdropFilter: 'blur(0)',
                    background: 'rgba(255, 255, 255, 0)',
                  }}
                  animate={{
                    backdropFilter: 'blur(3px)',
                    background: 'rgba(255, 255, 255, 0.5)',
                  }}
                  transition={{ delay: 0.05 }}
                />
                <Container onClick={() => setSelectedId(null)}>
                  <Card layoutId={id} isOpen {...rest}>
                    {children}
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
