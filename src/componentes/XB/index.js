import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider'
import { ProductoItem } from './ProductoItemXB'


export const ProductosListaXB = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  const productosFiltrados = productos.filter(producto => producto.id >= 21 && producto.id <= 30);

  console.log(productos)


  return (
    <>
      <h1 className='title'>Videojuegos Xbox</h1>
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
    </>
  );
}
