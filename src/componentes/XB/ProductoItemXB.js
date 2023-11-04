import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider'

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

  return (
    <div div className='playstation'>
    <Link to={`/videojuego/${id}`}>
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
        <Link to={`/videojuego/${id}`} className='btn'>Vista</Link>
      </div>
    </div>
  </div>
  )
}
