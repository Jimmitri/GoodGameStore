import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductosListaPS } from './PS/index';
import { ProductosListaXB } from './XB/index';
import { ProductosListaPC } from './PC/index';
import { Inicio } from './Inicio/index';
import { ProductoDetalles } from './ProductoDetalles';
import { AcercaDe } from './AcercaDe/index';
import { Terminos } from './Terminos/index';


export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/' exact Component={Inicio} />
        <Route path='/PlayStation' exact Component={ProductosListaPS} />
        <Route path='/Xbox' exact Component={ProductosListaXB} />
        <Route path='/PC' exact Component={ProductosListaPC} />
        <Route path='/Videojuego/:id' exact Component={ProductoDetalles} />
        <Route path='/AcercaDe' exact Component={AcercaDe} />
        <Route path='/TerminosyCondiciones' exact Component={Terminos} />
      </Routes>
    </section>
  );
};