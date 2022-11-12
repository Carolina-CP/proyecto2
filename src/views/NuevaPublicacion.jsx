import React from 'react';
import MenuNavegacion from '../components/MenuNavegacion';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const NuevaPublicacion = () => {
  const navigate = useNavigate();

  const { register, watch, handleSubmit } = useForm();


  const segundoForm = (dataDos, e) => {
    console.log(dataDos)
  }

  return (
    <>
      <MenuNavegacion />
      <div className="container my-4 justify-content-center">

        <div className="container my-4 justify-content-center mt-4">
          <div className="row">

            <div className="col-sm-5 col-md-6">
             
              <Form onSubmit={handleSubmit(segundoForm)} >
                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select defaultValue="Elige" {...register('categoria')} >
                      <option value="DG">Diseño Gráfico</option>
                      <option value="DG">Psicología</option>
                      <option value="DG">Coaching</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Formato</Form.Label>
                    <Form.Select defaultValue="Elige" {...register('formato')}>
                      <option>On Line</option>
                      <option>Presencial</option>
                    </Form.Select>
                  </Form.Group>


                </Row>

                <Form.Group className="mb-3" >
                  <Form.Label>Nombre del Servicio</Form.Label>
                  <Form.Control placeholder="Ej: diseño de currículo" {...register('titulo')} />
                </Form.Group>

                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Duración</Form.Label>
                    <Form.Control type="text" {...register('duracion')} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control {...register('precio')} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Formato</Form.Label>
                    <Form.Control {...register('formato')} />
                  </Form.Group>
                </Row>

                <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} {...register('descripcion')} />
                </Form.Group>




                <div class="d-grid gap-2 col-6 mx-auto mt-4">

                  {/*}  
                  <button class="btn btn-primary"
                    type="button"
                    style={{ backgroundColor: 'rgb(221, 110, 66)', color: 'white', border: 'none' }}
                    onClick={() => navigate(`/novedades`)}>
                     Publicar</button> {*/}

                  <input type="submit" value="enviar" />



                </div>

              </Form>

            </div>

            <div className="col-sm-5 col-md-6 d-flex align-items-center justify-content-center">
              aquí se verá la publicación
              <p>Título: {watch('titulo')}</p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default NuevaPublicacion