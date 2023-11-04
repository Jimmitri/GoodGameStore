import React, { useContext } from 'react';
import Portada from '../../images/portada.jpg'
import { DataContext } from '../../context/Dataprovider'
import { ProductoItem } from './ProductoItemInicio'

export const Inicio = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  const idsDeseados = [1, 5, 9, 11, 12, 14, 18, 25, 28, 30];

  const productosFiltrados = productos.filter(producto => idsDeseados.includes(producto.id));

  console.log(productos)
  
  return (
    <>
      <div className='inicio'>
      
        <img className='portada' src={Portada} alt='portada'/>
        <h1 className='to'>Top en Ventas</h1>
        <div className='Playstation'>
        {
          productosFiltrados.map(producto =>(
            <ProductoItem 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
            />
          ))
        }
        
      </div>
      </div>
    </>
  );
  }

