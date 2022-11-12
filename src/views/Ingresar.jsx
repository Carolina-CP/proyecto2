import React from 'react'

//importación de componentes
import FormularioIngreso from '../components/formularios/FormularioIngreso';

const Ingresar = () => {
  return (
    <>

      <div className="container my-4 justify-content-center">
        <div className='container text-center ml-5 mt-5 col-10 col-md-4'>
          <FormularioIngreso />
        </div>
      </div>

    </>

  )
}

export default Ingresar