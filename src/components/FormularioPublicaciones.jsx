//importación de hooks y dependencias
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
//importación de context
import { DataContext } from '../context/DataContext';

const FormularioPublicaciones = () => {

  const { entradas, setEntradas } = useContext(DataContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const enviarFormularioPublicaciones = (data, e) => {
    e.target.reset();
    console.log(data);
    setEntradas([...entradas, data])
  }

  return (
    <div>
      <h2>Publicar</h2>

      <form onSubmit={handleSubmit(enviarFormularioPublicaciones)}>
        <input
          name='titulo'
          placeholder='ingrese titulo'
          className='form-control my-2'
          {...register('titulo',
            {
              required: { value: true, message: 'Campo obligatorio' }
            }
          )}
        ></input>
        {errors.titulo && <spam
          className='text-danger text-small d-block mb-2'>
          {errors.titulo.message}</spam>}

        <input
          name='descripcion'
          placeholder='ingrese descripcion'
          className='form-control my-2'
          {...register('descripcion',
            {
              required: { value: true, message: 'Campo obligatorio' }
            }
          )}
        ></input>
        {errors.descripcion && <spam
          className='text-danger text-small d-block mb-2'>
          {errors.descripcion.message}</spam>}

        <button
          className='btn btn-primary'
        >Agregar</button>

      </form>


      <ul>
        {
          entradas.map(item =>
            <li>{item.titulo} - {item.descripcion}</li>
          )
        }
      </ul>

    </div>
  )
}

export default FormularioPublicaciones