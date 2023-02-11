import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
padding: 50px;
text-align: center;
`
const Error = styled.div`
  img{
    width: 100%;
  }
  a{
    color: var(--primary-text-color);
    text-decoration: none;
    background-color: var(--secondary-text-color);
    padding: 1rem 1.5rem;
    border-radius: 50px;
  }
  p{
    padding-bottom: 1rem;
  }
`
const Four = styled.div`
    background-image: url('https://media0.giphy.com/media/WNzdpwzusqLM1wb1gA/giphy.gif');
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
  
`

function ErrorPage() {
  return (
    <Container>
      <Error>
          <h1 style={{fontSize:"80px", margin:"0"}}>404</h1>
          <Four class="four_zero_four_bg">
          </Four>
          
          <div>
            <h3>Look like you're lost</h3>
          
          <p>the page you are looking for not avaible!</p>
          
          <Link to="/">Go to home</Link>
          </div>
      </Error>
    </Container>
  )
}

export default ErrorPage