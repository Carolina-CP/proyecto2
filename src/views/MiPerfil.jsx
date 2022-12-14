import React from 'react'
import MenuNavegacion from '../components/MenuNavegacion';
import Tarjeta from '../components/Tarjeta';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from '../context/DataContext';
import Card from 'react-bootstrap/Card';

const MiPerfil = () => {
  
  const navigate = useNavigate();

  const { datosRegistroBase, sesion } = useContext(DataContext);
  console.log('bandera perfil')
  console.log(datosRegistroBase[0].proveedor)

  return (
    <>
    <MenuNavegacion />
    <div className="container my-4 justify-content-center">
    <div className="container justify-content-center">

<div className="row mx-2">

  <div className="col-sm-5 col-md-6"
    style={{
      backgroundColor: 'rgb(234, 234, 234)',
      color: 'rgb(79, 109, 122)'
    }}>
    <div >
  <h3>Mis Datos</h3>
   { datosRegistroBase.map(d => 
         <Card key={d.id} className='border-0 bg-transparent ' style={{ width: '18rem' }}>
        <Card.Body
          className='border-none '>
          <Card.Title>{d.nombre} {d.apellido}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{d.mail}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        )} 


      <div className="col-sm-5 col-md-6 d-flex align-items-center justify-content-center">
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary"
                  type="button"
                  style={{ backgroundColor: 'rgb(221, 110, 66)', color: 'white', border: 'none' }}
                  onClick={() => navigate(`/nombre/nueva_publicacion`)}>
                  Nueva Publicación</button>
              </div>
            </div>

          </div>
        </div>

        <div className="container justify-content-center">
         <Tarjeta />
        </div>

    </div>
  </div>


    </div>
  </>
  )
}

export default MiPerfil