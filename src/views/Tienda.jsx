import React from 'react';
import FormularioCategorias from '../components/formularios/FormularioCategorias';
import MenuNavegacion from '../components/MenuNavegacion';

import Tarjeta from '../components/Tarjeta';


const Tienda = () => {
  return (
    <>
      <MenuNavegacion />

      <div className="container my-4 justify-content-center">

        <div>
          <FormularioCategorias />
        </div>

        <di>
          <Tarjeta />
        </di>

      </div>
    </>
  )
}

export default Tienda