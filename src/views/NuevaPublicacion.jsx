import React from 'react';
import MenuNavegacion from '../components/MenuNavegacion';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import '../assets/css/estiloPublicaciones.css';

const NuevaPublicacion = () => {
  const navigate = useNavigate();
  const { datosPublicacionBase, setdatosPublicacionBase, datosPublicacion, setdatosPublicacion } = useContext(DataContext);


  const { register, watch, handleSubmit, formState: { errors } } = useForm();

  console.log(datosPublicacionBase);

  const enviarFormularioPublicaciones = (publicacion, e) => {
    e.preventDefault();
    console.log(publicacion);
    e.target.reset();
    setdatosPublicacion(...datosPublicacionBase);
    setdatosPublicacionBase([...datosPublicacionBase, publicacion]);
    console.log(datosPublicacionBase)
    e.target.reset();
    navigate(`/novedades`)

  }
/*
  for (let i = 0; i < datosPublicacionBase.length; i++) {
    const element = datosPublicacionBase[i]
    element.id = i
    console.log('incrementar')
    console.log(i)
  }

  console.log(datosPublicacionBase)

*/
  return (
    <>
      <MenuNavegacion />
      <div className="container my-4 justify-content-center border border-primary">

        <div className="container my-4 justify-content-center mt-4 border border-secondary">
          <div className="row border border-success">

            <div className="col-sm-5 col-md-6 border border-danger">

              <Form onSubmit={handleSubmit(enviarFormularioPublicaciones)} >
                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select  {...register('categoria')} >
                      <option selected>Selecciona...</option>
                      <option value="Diseño Gráfico">Diseño Gráfico</option>
                      <option value="Psicología">Psicología</option>
                      <option value="Coaching">Coaching</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Formato</Form.Label>

                    <Form.Select defaultValue="Elige"  {...register('formato')}>
                      <option selected>Selecciona...</option>
                      <option value="Online">On Line</option>
                      <option value="Presencial">Presencial</option>
                    </Form.Select>
                  </Form.Group>


                </Row>

                <Form.Group className="mb-3" >
                  <Form.Label>Nombre del Servicio</Form.Label>
                  <Form.Control placeholder="Ej: diseño de currículo" {...register('titulo',
                    {
                      required: true,
                    }
                  )} />
                  {errors.titulo?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                </Form.Group>

                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="url" {...register('imagen')} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control {...register('precio',
                      {
                        required: true,
                      }
                    )} />
                    {errors.precio?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                  </Form.Group>


                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>proveedor</Form.Label>
                    <Form.Control placeholder="Nombre y apellido"  {...register('proveedor',
                      {
                        required: true,
                      }
                    )} />
                    {errors.proveedor?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                  </Form.Group>

                </Row>

                <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} {...register('descripcion',
                    {
                      required: true,
                    }
                  )} />
                  {errors.descripcion?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                </Form.Group>




                <div class="d-grid gap-2 col-6 mx-auto mt-4">


                  <button class="btn btn-primary"

                    style={{ backgroundColor: 'rgb(221, 110, 66)', color: 'white', border: 'none' }}
                    type="submit">
                    Publicar</button>

                </div>

              </Form>

            </div>


            <div className="col-sm-5 col-md-6 d-flex align-items-center justify-content-center border border-danger">

              <div className=" row border border-info">
                <div className="col-sm-5 col-md-6">
                  <Card>
                    <Card.Header className=" border-bottom">{watch('categoria')} - {watch('formato')} </Card.Header>
                    <Card.Body className="card-block text-start">
                      <Card.Title style={{ color: 'rgb(79, 109, 122)' }}
                        className="fs-4">{watch('titulo')}</Card.Title>
                      <Card.Subtitle className="text-muted">{watch('proveedor')}</Card.Subtitle>
                      <Card.Text className="card-text mt-2">{watch('descripcion')}</Card.Text>
                    </Card.Body>
                    <Card.Body className='text-center'>
                      <span style={{ color: 'rgb(221, 110, 66)' }}
                        className='fs-4'>$ {watch('precio')}</span>
                    </Card.Body>
                    <Card.Body className="d-grid gap-2">
                      <Button variant="secondary">Comprar</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-5 col-md-6">
                  <Card>
                 
                      <Card.Img className='imagen-publicaciones' variant="top" src={watch('imagen')} />
                 
                  </Card>
                </div>

              </div>

            </div >
            <div >


            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default NuevaPublicacion