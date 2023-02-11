import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionName from '../components/SectionName'
import styled from 'styled-components'
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const AboutInfo = styled.div`
  padding: 5rem 0;
`
const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
`
const GridAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
const Img = styled.img`
  width: 100%;
  display: block;
`
const GridInfo = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 5rem 2rem 5rem 2rem;
  @media (min-width: 992px) {
    padding-top: 5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const GridInfoFlex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h3{
    margin:0;
    padding: 0.5rem 0;
  }
  ion-icon{
    font-size: 2.5rem;
  }
`
const InfoSection = styled.section`
  background-image: linear-gradient(to bottom, transparent 100%, #ebebeb 0%), url('https://i.postimg.cc/RZhf31RT/panel.webp');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size:cover;
  color:black;
  @media only screen and (min-width: 768px) {
    background-image: linear-gradient(to left, transparent 50%, #ebebeb 0%), url('https://i.postimg.cc/j5rX3qNk/panel-recortada-comprimida.jpg');
    background-color: #ebebeb;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain; 
  }
  @media only screen and (min-width: 992px) {
    background-image: linear-gradient(to left, transparent 50%, #ebebeb 0%), url('https://i.postimg.cc/RZqrTdQb/jordan-orange-panel.jpg');
  }
`
const InfoSectionGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 15rem);
  row-gap: 2rem;
  @media only screen and (min-width: 768px) {
    grid-template-rows: unset;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    height: 18rem;
  }
`
const InfoSectionGridText = styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  backdrop-filter: blur(50px);
  padding: 2rem;
  @media only screen and (min-width: 768px) {
  background-color: #ebebeb;
  padding: 0 0 0  1rem;
    grid-row: 1/2;
    grid-column: 1/3;
  }
  @media only screen and (min-width: 992px) {
    padding: 0 0 0  5rem;
  }
`


function About() {
  return (
    <>
      <Navbar/>
      <SectionName title="About" />
      <AboutInfo>
        <Container>
          <GridAbout>
            <div>
              <Img src="https://i.postimg.cc/zGxb8LYR/nikefactory.jpg" alt=""/>
            </div>
            <div>
              <h3>About SNKRS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum laboriosam nostrum doloribus odit deleniti repellendus asperiores iusto laborum atque accusantium iure fuga dolorem praesentium officia suscipit, neque tempora voluptatibus.
              </p>
            </div>
          </GridAbout>
            <GridInfo>
              <GridInfoFlex>
                <div><ion-icon name="alarm-outline"></ion-icon></div>
                <div><h4>Deliveries on time</h4></div>
                <div>Nesciunt saepe atque blanditiis, non, esse unde iusto perspiciatis ducimus quasi necessitatibus fuga quidem natus quam similique ea</div>
              </GridInfoFlex>
              <GridInfoFlex>
                <div><ion-icon name="bag-handle-outline"></ion-icon></div>
                <div><h4>safe purchase</h4></div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente maxime illo doloremque veritatis, numquam dolorum corporis sit solu</div>
              </GridInfoFlex>
              <GridInfoFlex>
                <div><ion-icon name="ribbon-outline"></ion-icon></div>
                <div><h4>High quality</h4></div>
                <div>dolores qui autem possimus voluptate reprehenderit neque exercitationem veniam assumenda blanditiis soluta, placeat illum quae. Aut dicta</div>
              </GridInfoFlex>
            </GridInfo>
        </Container>
        <InfoSection>
          <InfoSectionGrid>
              <InfoSectionGridText>
                
                  <h2>JUST DO IT</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cumque? Officia, et praesentium quasi asperiores fugiat minima qui facere aperiam magnam facilis, error ullam pariatur obcaecati voluptates? Sint, consequuntur nemo?</p>
              </InfoSectionGridText>
          </InfoSectionGrid>
        </InfoSection>
          <Container>
            
            <Accordion className='accordion'>
            <h2 style={{textAlign:"center", margin:"0",  padding:"0 0 2rem 0"}}>Frequent questions</h2>
              <AccordionItem >
                  <AccordionHeader className='btn-accordion'>
                      <h3 className={`accordion-title`}> <span><ion-icon name="caret-down-circle-outline"></ion-icon></span>ㅤThat makes us different?</h3>
                  </AccordionHeader>

                  <AccordionBody>
                      <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nostrum rerum cumque suscipit beatae repellendus ipsum, corporis dolorem, fuga ipsam dolor adipisci cupiditate quam commodi, qui sapiente modi non tempore.
                      </div>
                  </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                  <AccordionHeader className='btn-accordion'>
                      <h3 className={`accordion-title`}><span><ion-icon name="caret-down-circle-outline"></ion-icon>  </span>ㅤJust a store?</h3>
                  </AccordionHeader>

                  <AccordionBody>
                      <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nostrum rerum cumque suscipit beatae repellendus ipsum, corporis dolorem, fuga ipsam dolor adipisci cupiditate quam commodi, qui sapiente modi non tempore.
                      </div>
                  </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                  <AccordionHeader className='btn-accordion'>
                      <h3 className={`accordion-title`}><span><ion-icon name="caret-down-circle-outline"></ion-icon></span>ㅤWhere are we located?</h3>
                  </AccordionHeader>

                  <AccordionBody>
                      <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et possimus quasi eligendi molestias sed, voluptatum, est voluptate odio fugiat nisi aspernatur, molestiae iusto. Eos rerum fugiat illum animi officiis sunt!
                      </div>
                  </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Container>
      </AboutInfo>
      <Footer/>
    </>
  )
}

export default About