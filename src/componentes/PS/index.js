import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider'
import { ProductoItem } from './ProductoItemPS'


export const ProductosListaPS = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  const productosFiltrados = productos.filter(producto => producto.id >= 11 && producto.id <= 20);

  console.log(productos)


  return (
    <>
      <h1 className='title'>Videojuegos PlayStation</h1>
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
