import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  @media (min-width: 992px) {
  height: 100vh;
  }
`
const DivSlider = styled.div`

  background-image: url('https://i.postimg.cc/NF3m1dh0/wallpaper-jordan-white-black.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2{
    padding:0 5rem;
  }
  @media (min-width: 992px) {
  height: 100vh;
  h2{
    font-size: 3rem;
    padding: 0 10rem;
  }
  }
`
const DivSlidersecond = styled.div`

  background-image: url('https://i.postimg.cc/y6hDnmMt/wallpaper-nike-xtreme.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 500px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media (min-width: 992px) {
  height: 100vh;
  display: block;
  h2{
    padding-top: 5rem;
    padding-left: 7rem;
    font-size: 4rem;
    max-width: 35rem;
  }
  }
`
const DivSliderthird = styled.div`

  background-image: url('https://i.postimg.cc/Vs3FbPy1/wallpaper-sneakers-revival.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 500px;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media (min-width: 992px) {
  height: 100vh;
  display: block;
  h2{
    padding-top: 5rem;
    padding-left: 5rem;
    font-size: 5rem;
    max-width: 40rem;
    margin-bottom: 0;
  }
  p{
      padding-left: 5rem;
      font-size: 2rem;
  }
}
`
const Button = styled.button` 
border-radius: 50px;
border-color: transparent;
cursor: pointer;
font-family: var(--primary-font-family);
background-color: var(--secondary-theme-color);
color: var(--primary-text-color);
  padding: 1rem 2rem;
  @media (min-width: 992px) {
font-size: 1.1rem;
    margin-left: 5rem;
  }
`
const Slider = () => {
  return (
    <>
    <div className="container">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        loop={Infinity}
      >
        <SwiperSlide style={{display:"flex", color:"white"}}>
          <DivSliderthird>
            <h2>SNKRS</h2>
            <p>Stay on top of SNKRS's top releases.</p>
            <Button>view collection</Button>
          </DivSliderthird>
        </SwiperSlide>

        
        <SwiperSlide style={{display:"flex", color:"white"}}>
          <DivSlider>
            <h2>THE MINUTE YOU GET AWAY FROM FUNDAMENTALS--THE
BOTTOM CAN FALL OUT OF YOUR GAME, YOUR SCHOOLWORK, YOUR JOB, WHATEVER YOU'RE DOING.</h2>
          </DivSlider>
        </SwiperSlide>

        <SwiperSlide style={{display:"flex", color:"white"}}>
          <DivSlidersecond>
            <h2>DISCOVER THE EVOLUTION OF AIR</h2>
          </DivSlidersecond>
        </SwiperSlide>

      </Swiper>
    </div>
    </>
  )
}

export default Slider
