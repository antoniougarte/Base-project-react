import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const FooterContainer = styled.footer`
  /* background-color: var(--secondary-theme-color); */
  background-color: black;
  padding-top: 2rem;
  a{
    /* color: var(--primary-text-color); */
    color: white;;
    text-decoration: none;
  }
`
const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
`
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;
  gap: 2rem;
`
const DivFirst = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  @media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  align-items: initial;
  }
`
const DivFirstLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  @media (min-width: 768px) {
  text-align: left;
  align-items: flex-start;
  }
`

const DivSecond = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  }
`
const DivSecondLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  @media (min-width: 768px) {
  flex-direction: row;
  a{
    padding: 0 1rem;
  }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
      <DivGrid>
        <DivFirst>
          <DivFirstLinks>
            <Link to="/">Find a Store</Link>
            <Link to="/">Become a member</Link>
            <Link to="/">Site feedback</Link>
          </DivFirstLinks>
          <DivFirstLinks>
            <Link to="/">Get help</Link>
            <Link to="/">Order Status</Link>
            <Link to="/">Delivery</Link>
            <Link to="/">Returms</Link>
            <Link to="/">Payment Options</Link>
            <Link to="/">Contact Us</Link>
          </DivFirstLinks>
          <DivFirstLinks>
            <Link to="/">About Nike</Link>
            <Link to="/">News</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Sustainbility</Link>
          </DivFirstLinks>
          <div>
            <span><ion-icon name="logo-twitter"></ion-icon></span>
            <span><ion-icon name="logo-facebook"></ion-icon></span>
            <span><ion-icon name="logo-youtube"></ion-icon></span>
            <span><ion-icon name="logo-instagram"></ion-icon></span>
          </div>
          
        </DivFirst>

        <DivSecond>
          <div>
            © All rights reserved Antonio Ugarte 2023
          </div>
          <DivSecondLinks>
            <Link to="/">About Nike</Link>
            <Link to="/">News</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
          </DivSecondLinks>
        </DivSecond>
      </DivGrid>
        
      </Container>
    </FooterContainer>
  )
}

export default Footer