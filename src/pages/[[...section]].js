import React, { useEffect, useState } from 'react'
import { styled } from 'emotion'
import Logo from 'components/logo'
import Me from 'sections/me'
import Contact from 'sections/contact'
import { ContentCards } from 'components/grid-cards'

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, 1fr) 1fr;
  justify-items: flex-end;
  grid-template-areas:
    'sidebar cards'
    'sidebar cards';
  grid-gap: 0 15vw;
  @media only screen and (max-width: 1500px) {
    grid-gap: 0 7.8vw;
  }
`

const Sidebar = styled.div`
  grid-area: sidebar;
  grid-template-areas:
    'splash'
    'contact';
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60vh 30vh;
  grid-gap: 10vh 0;
  position: sticky;
  top: 0;
  max-height: 100vh;
`

const Cards = styled.div`
  width: 100%;
  grid-area: cards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
