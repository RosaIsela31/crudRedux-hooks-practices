import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Products from './components/Products';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container mt-5'>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/productos/nuevo' component={NuevoProducto} />
          <Route exact path='/productos/editar/:id' component={EditarProducto} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
