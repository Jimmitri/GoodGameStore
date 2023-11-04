import React, {useContext, useEffect} from 'react';
import { DataContext } from '../../context/Dataprovider'
import { Link } from 'react-router-dom';


export const ProductoItem = ({
  id,
  title,
  price,
  image,
  category,
  cantidad
}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);


  return (
    <div div className='playstation'>
    <Link to={`/videojuego/${id}`} onClick={handleScroll}>
      <div className='playstation_img'>
        <img src={image} alt={title} />
      </div>
    </Link>
    <div className='producto_footer'>
      <h1>{title}</h1>
      <p>{category}</p>
      <p className='price'>S/.{price}</p>
    </div>
    <div className='buttom'>
      <div className='buttomAdd'>
        <button className='btn' onClick={() => addCarrito(id)}>Añadir al carrito</button>
        </div>
      <div className='buttomVista'>
        <Link to={`/videojuego/${id}`} onClick={handleScroll} className='btn'>Vista</Link>
      </div>
    </div>
  </div>
  )
}
