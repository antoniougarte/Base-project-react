import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionName from '../components/SectionName'
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
  justify-content: center;
  gap: 2rem;
`
const Divcard = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Span = styled.span`
  background-color: black;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  ion-icon{
    font-size: 3rem;
  }
`
const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`
const Contact = () => {
  return (
    <>
      <Navbar/>
        <SectionName title="Contact"/>
          <Container>
            <h3>Get in touch</h3>
          <DivGrid>
            <Divcard>
              <Span><ion-icon name="location-outline"></ion-icon></Span>
              <div>
                <h4>ADDRESS</h4>
                <h5>Werfield Group contracting</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h5>Netherland Division Office</h5>
                <p>1270 Automain Drive</p>
              </div>
              
            </Divcard>
            <Divcard>
              <Span><ion-icon name="call-outline"></ion-icon></Span>
              <div>
                <h4>PHONE</h4>
                <h5>Werfield Group contracting</h5>
                <p>303876245 phone</p>
                <p>987654321 phone</p>
                <h5>Welfield 24/7 Service Department</h5>
                <p>706-2342857</p>
                <h5>Northe Principan Office</h5>
                <p>099-3457653</p>
              </div>
            </Divcard>
            <Divcard>
              <Span><ion-icon name="chatbox-ellipses-outline"></ion-icon></Span>
              <div>
                <h4>EMAIL</h4>
                <h5>Request for propasai</h5>
                <p>info@snkcontacto.com</p>
                <h5>Delivery Services</h5>
                <p>servicesdelivery@snk.com</p>
                <h5>employment oportunities</h5>
                <p>carreer@contact.com</p>
              </div>
            </Divcard>
          </DivGrid>
          <DivForm>
            <div>
              test
            </div>
          </DivForm>
        </Container>
      <Footer/>
    </>
    
  )
}

export default Contact