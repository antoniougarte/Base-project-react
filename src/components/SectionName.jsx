import React from 'react'
import styled from 'styled-components'

const DivSection = styled.div`
  background-image: url('https://i.postimg.cc/NF3m1dh0/wallpaper-jordan-white-black.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    padding: 0;
    margin: 0;
    font-size: 3rem;
    color: white;
  }
`
const SectionName = (props) => {
  return (
    <>
      <DivSection>
        <h2>{props.title}</h2>
      </DivSection>
    </>
  )
}

export default SectionName