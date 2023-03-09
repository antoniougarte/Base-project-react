import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShoes } from '../store/slices/shoes';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  text-align: center;
`
const Divflex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;
  gap: 2rem;
`
const Card = styled.div`
  width: 350px;
  background-color: var(--secondary-theme-color);
  padding: 1rem;
`
const ImgDiv = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
`
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  :hover{
    scale: 1.1;
  }
`
const Divproducts= styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
const Spanproducts = styled.span`
  background-color: #28a745;
  color: white;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const Divbtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

`
const BtnClear = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: red;
  border-color: transparent;
  border-radius: 20px;
  color:white;
  cursor: pointer;
`
const BtnShow = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #28a745;
  border-color: transparent;
  border-radius: 20px;
  color:white;
  cursor: pointer;
`

const Shoes = () => {

  const dispatch = useDispatch();

  const { isLoading, shoes, page } = useSelector( state=> state.shoes)

  useEffect(()=>{
    dispatch( getShoes());
  },[])

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const addToCart = (product) => {
    const newProduct = {
      name: product.attributes.name,
      code: product.id,
      price: product.attributes.price,
    };
    setCart([...cart, newProduct]);
    localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
  };
  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  
  const sendWhatsapp = () => {
    let message = "";
    cart.forEach(item => {
      message += `𝗜 𝗻𝗲𝗲𝗱 𝘁𝗵𝗶𝘀 Product: ${item.name} / Price: ${item.price} / Code: ${item.code}\n`;
    });
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };
  

  return (
    <>
    <Container>
      <h2>Take advantage of limited time offers</h2>
      <p><span>Load Status : {isLoading?  'El API está desactivado ❗': 'loaded ✔'}</span></p>
      <Divproducts>
        <div>
          <Spanproducts>
            <ion-icon name="cart-outline"></ion-icon>{cart.length}
          </Spanproducts>
        </div>
        <Divbtn>
          <BtnClear onClick={clearCart}>Clear cart</BtnClear>
          <BtnShow onClick={sendWhatsapp}>Buy all</BtnShow>
        </Divbtn>
      </Divproducts>
      

      <Divflex>
          {
            shoes.map(par =>(
              <Card>
                <ImgDiv src={par.attributes.image.data[0].attributes.url} alt={par.attributes.name} />
                <p>{par.attributes.name}</p>
                <p>Precio: {par.attributes.price}</p>
                <Button onClick={() => addToCart(par)}>Add to cart</Button>

              </Card>
          ))
          }
      </Divflex>
    </Container>
      
    </>
  )
}

export default Shoes