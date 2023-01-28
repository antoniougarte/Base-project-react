import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import 'boxicons';
import logo from '../assets/logo.png';


const NavBar = styled.nav`
  background-color: var(--secondary-theme-color);
  padding: 0 1rem;
`
const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
`
const NavFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const NavLogo = styled.div`
  display: flex;
  padding: 0;
`
const NavLinks = styled.div`
  position: absolute;
  background-color: var(--secondary-theme-color);
  width: 100%;
  left: 0;
  top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 1rem 0;
  border-top: 1px solid var(--primary-text-color);
  @media (min-width: 992px) {
    border-top: 0;
  }
  a{
    color: var(--primary-text-color);
    margin: 1rem;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
    @media (min-width: 992px) {
      margin: 0 1rem;
  }
  }
  a:hover, a:focus {
    background-size: 100% 2px;
  }

  visibility: ${props => props.menuVisibleProp ? "visible" : "hidden"};
  /* Otra forma de usar componentes con desectructuración (línea de abajo) */
  /* visibility: ${({ menuVisibleProp }) => (menuVisibleProp ? 'visible' : 'hidden')}; */
  @media (min-width: 992px) {
    background-color: transparent;
    position: relative;
    width: auto;
    top: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:  0;
    visibility: visible;
  }


`
const NavTheme = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const NavThemeIcon = styled.div`
cursor: pointer;
  display: flex;
  @media (min-width: 992px) {
    display: none;
  }
`
const Select = styled.select`
  font-size: 16px;
  font-family: var(--primary-font-family);
  padding: .4em 1.4em .3em .8em;
  border-radius: .3em;
`


function Navbar() {
  
  let activeStyle = {
    backgroundSize: "100% 2px",
  };

  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? '');

  const handleChange = (e) => {
    const valor = e.target.value;
    // para seleccionar todo el HTML (línea abajo)
    document.documentElement.className = valor
    localStorage.setItem('theme', valor)
    setTheme(valor)
  }
  const [menuVisible, setMenuVisible] = useState(false)
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <NavBar>
        <Container>
          <NavFlex>
            <NavLogo>
              <Link style={{ display: "flex" }} to="/"><img src={logo} width={60} alt="test" /></Link>
            </NavLogo>
            <NavLinks menuVisibleProp={menuVisible}>
              <NavLink onClick={handleMenuClick} style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/about" >About</NavLink>
              <NavLink onClick={handleMenuClick} style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/contact">Contact</NavLink>
            </NavLinks>
            <div>
              
            </div>
            <NavTheme>
              <div>
                <Select 
                id="theme" 
                onChange={handleChange}
                value={theme}
                >
                  <option value="system">💻 system</option>
                  <option value="dark">🌚 dark</option>
                  <option value="light">🌞 light</option>
                </Select>
              </div>
              <NavThemeIcon>
                <box-icon onClick={handleMenuClick} name='menu' size='md' color="var(--primary-text-color)"></box-icon>
              </NavThemeIcon>
            </NavTheme>
          </NavFlex>
        </Container>
      </NavBar>
    </>
  )
}

export default Navbar