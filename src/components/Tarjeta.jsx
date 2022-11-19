import React from 'react';
import { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";

const Tarjeta = () => {

    const navigate = useNavigate();

    const { datosPublicacionBase, setdatosPublicacionBase, datosPublicacion, setdatosPublicacion } = useContext(DataContext);

    console.log('este es novedades')
    console.log({ datosPublicacionBase})

  

  return (
    <>
    <div className="row row-cols-md-auto justify-content-center">
        {datosPublicacionBase.map(d =>
            <Card className='m-3' style={{ width: '21rem' }}>
                <Card.Title className="text-muted"> id: {d.id} - {d.titulo}</Card.Title>
                <Card.Img variant="top" src={d.imagen} alt={d.titulo} />
                <Card.Body>

                    <Card.Subtitle className="mb-2 text-muted">{d.proveedor}</Card.Subtitle>
                    <div className="row row-cols-md-auto justify-content-between">
                        <span
                            style={{ color: 'rgb(221, 110, 66)' }}
                            className='fs-4'
                        >${d.precio}</span>

                        <Button style={{ backgroundColor: 'rgb(192, 214, 223)', 
                        color: 'rgb(79, 109, 122)', 
                        borderColor: 'rgb(79, 109, 122)'}} 
                        size="sm"
                        onClick={() => navigate(`/tienda/nombre_curso`)}>
                            Más información</Button>
                    </div>
                </Card.Body>
            </Card>
        )}
    </div>


</>
  )
}

export default Tarjeta