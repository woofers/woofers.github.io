import React, { useEffect, useState } from 'react'
import { styled } from 'emotion'
import Logo from 'components/logo'
import Me from 'sections/me'
import Contact from 'sections/contact'
import { ContentCards } from 'components/grid-cards'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-template-areas:
    'sidebar cards'
    'sidebar cards';
`

const Sidebar = styled.div`
  width: 100%;
  grid-area: sidebar;
  grid-template-areas:
    'splash'
    'contact';
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60vh 40vh;
  position: sticky;
  top: 0;
  max-height: 100vh;
`

const Cards = styled.div`
  grid-area: cards;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Index = () => {
  return (
    <Grid>
      <Sidebar>
        <Me />
        <Contact />
      </Sidebar>
      <Cards>
        <ContentCards />
      </Cards>
    </Grid>
  )
}

export default Index
