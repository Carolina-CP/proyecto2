import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//importación de hooks y dependencias
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
//importación de context
import { DataContext } from '../../context/DataContext';


const FormularioRegistro = () => {

    const navigate = useNavigate();

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
        navigate(`/ingresar`)
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
        <div>

            <Form onSubmit={handleSubmit(enviarFormularioRegistro)}>
                <Form.Group className="mb-3 text-start" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" {...register('nombre',
                        {
                            required: true,
                        }
                    )} />
                    {errors.nombre?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                </Form.Group>


                <Form.Group className="mb-3 text-start" >
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" {...register('apellido',
                        {
                            required: true,
                        }
                    )} />
                    {errors.apellido?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Coreo Electrónico</Form.Label>
                    <Form.Control type="mail" {...register('mail',
                        {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        }
                    )} />
                    {errors.mail?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                    {errors.mail?.type === 'pattern' && <span className="text-small text-warning">El formato no es válido</span>}
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" {...register('clave',
                        {
                            required: true,
                            maxLength: 4,
                            minLength: 4
                        }
                    )} />
                    {errors.clave?.type === 'required' && <span className="text-small text-warning">Este campo es obligatorio</span>}
                    {errors.clave?.type === 'pattern' && <span className="text-small text-warning">El formato no es válido</span>}
                    {errors.clave?.type === 'maxLength' && <span className="text-small text-warning">La clave debe contener 4 letras</span>}
                    {errors.clave?.type === 'minLength' && <span className="text-small text-warning">La clave debe contener 4 letras</span>}
                </Form.Group>

                <Button type='submit'
                style={{ backgroundColor: 'rgb(221, 110, 66)', color: 'white', border: 'none' }}
                >Crear Cuenta</Button>

            </Form>


        </div>
    )
}

export default FormularioRegistro

