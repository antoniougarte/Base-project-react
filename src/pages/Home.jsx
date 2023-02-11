import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

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