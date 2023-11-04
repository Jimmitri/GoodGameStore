import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/Dataprovider';
import { useParams } from 'react-router-dom';
import { ProductoItem } from './Inicio/ProductoItemInicio';

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito
  const params = useParams();
  const [detalle, setDetalle] = useState({});
  let item = 0;

  useEffect(() => {
    productos.forEach((producto) => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
      }
    });
  }, [params.id, productos]);

  return (
    <>
      <div className="detalles">
        <img src={detalle.image} alt={detalle.title} />
        <div className="text">
          <h2>{detalle.title}</h2>
          <p className="price">S/.{detalle.price}</p>
          <button onClick={() =>addCarrito(detalle.id)}>Añadir al carrito</button>
          <div className="description">
            <p>
              <b>Sinopsis:</b> {detalle.sipnosis}
            </p>
          </div>
        </div>
      </div>

      <h2 className="relacionados">Productos Relacionados</h2>
      <div className="Playstation">
        {productos.map((producto) => {
          if (item < 7 && detalle.category === producto.category && detalle.id !== producto.id){
            item++;
            return (
              <ProductoItem
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                category={producto.category}
                cantidad={producto.cantidad}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

