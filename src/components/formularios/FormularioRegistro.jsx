//importación de hooks y dependencias
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
//importación de context
import { DataContext } from '../../context/DataContext';





const FormularioRegistro = () => {

    const { datosRegistro, setDatosRegistro, datosRegistroBase, setDatosRegistroBase } = useContext(DataContext);
    console.log(datosRegistroBase)

    const { register, handleSubmit, formState: { errors } } = useForm();


    const enviarFormularioRegistro = (data, e) => {
        e.preventDefault();
        console.log(data)
        e.target.reset();
        setDatosRegistro(...datosRegistroBase);
        setDatosRegistroBase([...datosRegistroBase, data ])
        console.log(datosRegistroBase);
    }

    for(let i = 0; i < datosRegistroBase.length; i++){
        const element = datosRegistroBase[i]
        element.id = i
      }
      
      console.log(datosRegistroBase)

    /* 
      for(var i=0; i < datosRegistroBase; i++){
        datosRegistroBase[i].nuevobooleano = true;
    } */

    console.log(datosRegistroBase)

    return (
        <div>
            <h2>FormularioRegistro</h2>

            <form onSubmit={handleSubmit(enviarFormularioRegistro)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre',
                        {
                            required: true,
                        }
                    )} />
                    {errors.nombre?.type === 'required' && <span>This field is required</span>}
                </div>

                <div>
                    <label>Apellido</label>
                    <input type="text" {...register('apellido',
                        {
                            required: true,
                        }
                    )} />
                    {errors.apellido?.type === 'required' && <span>This field is required</span>}
                </div>

                <div>
                    <label>Correo Electrónico</label>
                    <input type="mail" {...register('mail',
                        {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        }
                    )} />
                    {errors.mail?.type === 'required' && <span>This field is required</span>}
                    {errors.mail?.type === 'pattern' && <span>This field is required</span>}
                </div>

                <div>
                    <label>Contraseña</label>
                    <input type="text" {...register('clave',
                        {
                            required: true,
                            maxLength: 4,
                            minLength: 3
                        }
                    )} />
                    {errors.clave?.type === 'required' && <span>This field is required</span>}
                    {errors.clave?.type === 'maxLength' && <span>Te pasaste 10 pueblos</span>}
                    {errors.clave?.type === 'minLength' && <span>Te faltan palos</span>}
                </div>

                <input type='submit' value='crear Cuenta'></input>

            </form>


        </div>
    )
}

export default FormularioRegistro