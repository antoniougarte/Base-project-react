import React from 'react'
import './styles/cardProduct.css'
import { Link } from 'react-router-dom'

const cardProduct = (props) => {
  return (
    <>
      <div className="card">
        <div className="imgBx">
          <img src={props.src} width="150" />
        </div>
        <div className="contentBx">
          <h2>Nike Shoes</h2>
          <div className="size">
            <h3>Nike future</h3>
          </div>
          <Link to='/products'>Buy now</Link>
        </div>
      </div>
    </>
  )
}

export default cardProduct