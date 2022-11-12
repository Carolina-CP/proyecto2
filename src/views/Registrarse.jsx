import React from 'react';

//importación de componentes
import FormularioRegistro from '../components/formularios/FormularioRegistro';

const Registrarse = () => {
  return (
    <>
      <div className="container my-4 justify-content-center">
      <div className='container text-center ml-5 mt-5 col-10 col-md-4'>
      <h5>Crea una cuenta hoy y mejora tus opciones laborales</h5>
        <FormularioRegistro />
        </div>
      </div>
      </>
  )
}

export default Registrarse