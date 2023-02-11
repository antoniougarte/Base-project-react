import React from 'react'
import CardProduct from './CardProduct'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  text-align: center;
  padding: 5rem 0;
`
const DivGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const Products = () => {
  return (
    <>
    <Container>
      <h2>Best sellers</h2>
      <DivGrid>
        <CardProduct src="https://res.cloudinary.com/di0vpmo0y/image/upload/v1674581211/thumbnail_Air_Jordan_I_Off_White_University_Blue_5faddf12cf.png"/>
        <CardProduct src="https://res.cloudinary.com/di0vpmo0y/image/upload/v1674581274/thumbnail_Air_Jordan_I_skyeblue_bd505223a6.png"/>
        <CardProduct src="https://res.cloudinary.com/di0vpmo0y/image/upload/v1674581027/thumbnail_Air_Jordan_I_Blue_8fef4cf8bb.png"/>
        <CardProduct src="https://res.cloudinary.com/di0vpmo0y/image/upload/v1674581050/thumbnail_Air_jordan_I_Bred_Toe_e57b714dda.png"/>
      </DivGrid>
    </Container>
    </>
  )
}

export default Products