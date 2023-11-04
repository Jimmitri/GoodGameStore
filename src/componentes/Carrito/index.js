import React, { useContext } from 'react'
import { DataContext } from '../../context/Dataprovider'

export const Carrito = () => {

  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;


  const tooglefalse = () =>{
    setMenu(false);
  }


  const show1 = menu ? 'carritos show' : 'carritos';
  const show2 = menu ? 'carrito show' : 'carrito';

  const resta = id =>{
    carrito.forEach(item =>{
      if(item.id === id){
        item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
      }
      setCarrito([...carrito])
    })
  }
  const suma = id =>{
    carrito.forEach(item =>{
      if(item.id === id){
        item.cantidad +=1;
      }
      setCarrito([...carrito])
    })
  }

  const removeProducto = id =>{
    
      carrito.forEach((item, index) =>{
        if(item.id === id){
          item.cantidad = 1;
        carrito.splice(index, 1)
        }
      })
      setCarrito([...carrito])
    }

  return (
    <div className={show1}>
      <div className={show2}>
        <div className='carrito_close' onClick={tooglefalse}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <h2>Carrito</h2>

        
        <div className='carrito_center'>
          {

            carrito.length === 0 ? <h2 style={{
              textAlign: "can", fontSize: "1.5rem"
            }}>Su carrito esta vacio</h2>: <>

            {
            carrito.map((producto) =>(
              <div className='carrito_item' key={producto.id}>
              <img src={producto.image} alt='' />
              <div>
                <h3>{producto.title}</h3>
                <p className='price'>S/.{producto.price}</p>
              </div>
              <div>
                <ion-icon name="caret-up-outline" onClick={() => suma(producto.id)}></ion-icon>
                <p className='cantidad'>{producto.cantidad}</p>
                <ion-icon name="caret-down-outline" onClick={() => resta(producto.id)}></ion-icon>
              </div>
              <div className='remove_item' onClick={() =>removeProducto(producto.id)}>
                <ion-icon name="trash-outline"></ion-icon>
              </div>
            </div>
            ))
          }         
          </>
          }

        </div>
        <div className='carrito_footer'>
          <h3>Total: S/.{total}</h3>
          <button className='btn'>Pagar</button>
          
        </div>
      </div>
    </div>
  )
}
