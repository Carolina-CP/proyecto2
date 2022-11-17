//importación de hooks y dependencias
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
//importación de context
import { DataContext } from '../../context/DataContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Prueba = () => {

    const { datosRegistro, setDatosRegistro, datosRegistroBase, setDatosRegistroBase } = useContext(DataContext);
    console.log(datosRegistroBase)

    const { register, handleSubmit, formState: { errors } } = useForm();


    const enviarFormularioRegistro = (data, e) => {
        e.preventDefault();
        console.log(data)
        e.target.reset();
        setDatosRegistro(...datosRegistroBase);
        data.sesion = false;
        setDatosRegistroBase([...datosRegistroBase, data])
        console.log(datosRegistroBase);
    }

    for (let i = 0; i < datosRegistroBase.length; i++) {
        const element = datosRegistroBase[i]
        element.id = i
    }

    console.log(datosRegistroBase)


    for (var i = 0; i < datosRegistroBase; i++) {
        datosRegistroBase[i].nuevobooleano = true;
    }

    console.log(datosRegistroBase)

    return (
        <div className='container text-center '>
            <Form onSubmit={handleSubmit(enviarFormularioRegistro)}>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" {...register('nombre',
                        {
                            required: true,
                        }
                    )} />
                    {errors.apellido?.type === 'required' && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" {...register('apellido',
                        {
                            required: true,
                        }
                    )} />
                     {errors.mail?.type === 'required' && <span>This field is required</span>}
                    {errors.mail?.type === 'pattern' && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Coreo Electrónico</Form.Label>
                    <Form.Control type="mail" {...register('mail',
                        {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        }
                    )} />
                      {errors.clave?.type === 'required' && <span>This field is required</span>}
                    {errors.clave?.type === 'maxLength' && <span>Te pasaste 10 pueblos</span>}
                    {errors.clave?.type === 'minLength' && <span>Te faltan palos</span>}
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" {...register('clave',
                        {
                            required: true,
                            maxLength: 4,
                            minLength: 3
                        }
                    )} />
                </Form.Group>


                <Button className='m-4'
                    onClick={() => navigate(`/ingresar`)}
                >Crear cuenta</Button>
            </Form>

        </div>
    )
}

export default Prueba