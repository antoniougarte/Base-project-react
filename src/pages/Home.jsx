import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'

const DivContainer = styled.div`
  background-color:red;
  padding: 1rem 0;
`

function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Products/>
      <Footer/>
    </>
  )
}

export default Home