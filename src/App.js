import './App.css';
import { useContext, useState } from 'react';
import './context/DataContext';

// importación de hook y dependencias
import { DataProvider } from './context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Cabecera from './components/Cabecera';

import Ingresar from './views/Ingresar';
import Registrarse from './views/Registrarse';

import Home from './views/Home';
import Novedades from './views/Novedades';
import Tienda from './views/Tienda';
import Detalles from './views/Detalles';
import Nosotros from './views/Nosotros';
import MiPerfil from './views/MiPerfil';
import NotFound from './views/NotFound';
import NuevaPublicacion from './views/NuevaPublicacion';




function App() {

 // const {sesion} = useContext(DataContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Cabecera />
        <DataProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ingresar' element={<Ingresar />} />
            <Route path='/registrarse' element={<Registrarse />} />



            <Route path='/novedades' element={<Novedades />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path="/tienda/nombre_curso" element={<Detalles />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/nombre' element={<MiPerfil />} />
            <Route path='/nombre/nueva_publicacion' element={<NuevaPublicacion />} />
            < Route path='/*' element={<NotFound />} />
            
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
