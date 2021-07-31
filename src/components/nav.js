import React, { useState } from 'react'
import styled from '@emotion/styled'

// #fff9fb

const Button = styled.button`
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  border-radius: 8px;
  border: medium none;
  background: transparent none repeat scroll 0% 0%;
  padding: 10px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-right: 6px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, transform 0.1s ease 0s, transform 0.1s ease 0s;
  position: relative;
  outline: currentcolor none medium;
  color: #717171;
  cursor: pointer;
  &[aria-current=true] {
    color: #222222;
    &:after {
      position: absolute;
      content: "";
      background-color: #222222;
      bottom: -6px;
      left: 10px;
      width: calc(100% - 20px);
      height: 2px;
    }
  }
  &:hover {
    background: #f7f7f7 none repeat scroll 0% 0%;
  }
  &[aria-current=false]:focus {
    transform: scale(0.90) !important;
  }
`

const Container = styled.div`
  display: flex;
  margin: 10px 20px;
  box-shadow: inset 0px -2px 0px -1px #dddddd;
  > button:first-of-type {
    margin-left: -10px;
  }
`

const Nav = () => {
  const [selected, setSelected] = useState('Home')
  return (
    <Container>
      <Button onClick={() => setSelected('Home')} aria-current={selected === 'Home'}>Home</Button>
      <Button onClick={() => setSelected('About')} aria-current={selected === 'About'}>About</Button>
      <Button onClick={() => setSelected('Me')} aria-current={selected === 'Me'}>Me</Button>
    </Container>
  )
}

export default Nav
