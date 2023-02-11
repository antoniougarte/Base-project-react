import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionName from '../components/SectionName'
import Shoes from '../components/Shoes'
import styled from 'styled-components'

const DivShoes = styled.div`
  padding: 5rem 0;
`

const Products = () => {
  return (
    <>
      <Navbar/>
      <SectionName title="Products" />
      <DivShoes>
        <Shoes/>
      </DivShoes>
      <Footer/>
    </>
  )
}

export default Products