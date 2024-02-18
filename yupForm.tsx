import * as yup from 'yup';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/default
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const MyForm = (): React.FC => {
  // Esquema de validación Yup
  const schema = yup.object().shape({
    nombre: yup.string().required('Nombre obligatorio'),
    correo: yup.string().email('Correo electrónico no válido').required('Correo electrónico obligatorio'),
    contrasena: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Contraseña obligatoria'),
  });

  // Hook de React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Integración con Yup
  });

  // Función para manejar el envío del formulario
  const onSubmit = (data) => {
    // Implementar la lógica de envío del formulario
    console.log('Formulario enviado:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" {...register('nombre')} />
        {errors.nombre && <p className="error">{errors.nombre.message}</p>}
      </div>
      <div>
        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" {...register('correo')} />
        {errors.correo && <p className="error">{errors.correo.message}</p>}
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" {...register('contrasena')} />
        {errors.contrasena && <p className="error">{errors.contrasena.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;