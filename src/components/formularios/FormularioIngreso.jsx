//importación de hooks y dependencias
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

//importación de context
import { DataContext } from '../../context/DataContext';

//importación de estilos 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormularioIngreso = () => {

  const { datosRegistroBase, setDatosRegistroBase, sesion, setSesion } = useContext(DataContext);

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [passwort, setPasswort] = useState('');

  const iniciarSesion = () => {
    if (!usuario && !passwort) {
      alert('Complete el formulario')
    } else {
      let usuario = datosRegistroBase.find((e) => e.clave === passwort);
      if (usuario !== undefined) {
        if (usuario.clave == passwort) {
          setSesion(true);
          navigate(`/novedades`)
        } else {
          alert('Contraseña equivocada')
        }
      } else {
        alert('El correo ingresado no existe')
      }
    }
  }
 console.log(sesion)

  return (
    <div>
      <h2>FormularioIngreso</h2>

      <Form>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Coreo Electrónico</Form.Label>
          <Form.Control type="email" onChange={(e) => setUsuario(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" onChange={(e) => setPasswort(e.target.value)} />
        </Form.Group>


        <Button className='m-4'
          onClick={iniciarSesion}
        >Ingresar</Button>
      </Form>

      <p>¿Aún no tienes tu cuenta?</p>

      <Button type="btn" className='m-4'
        onClick={() => navigate(`/registrarse`)}
      >Crear Cuenta</Button>

    </div>
  )

}
export default FormularioIngreso