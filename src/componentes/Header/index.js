import React, {useContext, useEffect} from 'react';
import Logo from "../../images/Logo.png"
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/Dataprovider'

export const Header = () => {

const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [carrito] = value.carrito

const handleScroll = () => {
  window.scrollTo(0, 0);
};

const toogleMenu = () =>{
  setMenu(!menu)
} 

useEffect(() => {
  handleScroll();
}, []);

return (
  <header>
    <Link to='/' onClick={handleScroll}>
      <div className='logo'>
        <img src={Logo} alt='Logo' width="50"/>
      </div>
    </Link>
    <ul>
      <li>
        <Link to='/' onClick={handleScroll}>INICIO</Link>
      </li>
      <li>
        <Link to='/PlayStation' onClick={handleScroll}>PlayStation</Link>
      </li>
      <li>
        <Link to='/Xbox' onClick={handleScroll}>Xbox</Link>
      </li>
      <li>
        <Link to='PC' onClick={handleScroll}>Steam</Link>
      </li>
    </ul>
    <div className='cart' onClick={toogleMenu}>
      <ion-icon name="cart-outline"></ion-icon>

      <span className='item_total'>{carrito.length}</span>
    </div>
  </header>
)
}