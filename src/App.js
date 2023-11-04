import React from "react";
import {Header} from './componentes/Header';
import { BrowserRouter as Route} from "react-router-dom";
import { Paginas } from './componentes/Paginas';
import { DataProvider} from './context/Dataprovider'
import { Carrito } from './componentes/Carrito'
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Route>
          <Header />
          <Carrito />
          <Paginas />
          <Footer />
        </Route>
      </div>
    </DataProvider>
  );
}

export default App;
