import React from 'react';
import MenuNavegacion from '../components/MenuNavegacion';

import Tarjeta from '../components/Tarjeta';

const Novedades = () => {
 
  return (
    <>
    <MenuNavegacion />
    
      <div className="container my-4 justify-content-center">
       <Tarjeta />
      </div>
    </>
  )
}

export default Novedades