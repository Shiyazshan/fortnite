import React from 'react'
import HeroSect from './HeroSect'
import SlickSect from './SlickSect'
import styled from 'styled-components'
import Contributers from './Contributers'
import Footer from './Footer'
import { Fade } from 'react-reveal'

const Layout = () => {
  return (
    <Cover>
      <HeroSect/>
      <SlickSect/>
      <Contributers/>
      <Footer/>
    </Cover>
  )
}

export default Layout

const Cover = styled.div`
width: 70%;
margin:0 auto;
`;