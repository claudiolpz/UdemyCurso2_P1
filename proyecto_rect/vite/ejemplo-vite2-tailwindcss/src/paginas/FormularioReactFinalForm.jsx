import { Link } from 'react-router'
import Swal from 'sweetalert2'
import { render} from 'react-dom'
import {Form, Field} from 'react-final-form'

const FormularioReactFinalForm = () => {
  
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  const required = (value) => (value ? undefined : 'Este campo es obligatorio');

  const mailValido = (value) => ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? undefined : 'El E-Mail ingresado no es válido');

  const passwordValido = (value) => ((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(value)) ? undefined : 'La contraseña debe tener al menos 1 número, una mayúscula, y un largo entre 6 y 20 caracteres.');

  const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value),
    undefined);
  const onSubmit = async (values) =>{

    await sleep(300);
    Swal.fire({
      icon:"success",
      title:"OK",
      text:`E-Mail: ${values.correo} | Contraseña: ${values.password}`
    })
  }
  return (
    <div>
       <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/formularios"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Formularios
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Formulario React Final Form
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-center mb-2">Formulario React Final Form </h1>
      <hr />
      <Form 
      onSubmit={onSubmit}
      render={({handleSubmit, form, submitting, pristine, values})=>(
        <form onSubmit={handleSubmit}>
          <div className='block mb-2 text-sm font-medium text-gray-900 dark:text-white max-w-sm mx-auto mt-3'>
            <Field 
            name="correo" 
            validate={composeValidators(required,mailValido)}
            // className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            // id="correo"
            // component="input"
            // type="email"
            // placeholder="E-Mail"
           >
            {({input, meta})=>(
              <div>
                <label htmlFor="correo">E-Mail</label>
                <input 
                  type="text" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder='E-mail'
                  {...input}
                 />
                 {meta.error && meta.touched && <div className='text text-red-500'>{meta.error}</div>}
              </div>
            )}
            </Field>

          </div>
          <div className='block mb-2 text-sm font-medium text-gray-900 dark:text-white max-w-sm mx-auto mt-3'>
            <Field name="password"
             validate={composeValidators(required,passwordValido)}>
            {({input, meta})=>(
              <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                  type="password" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder='Contraseña'
                  {...input}
                 />
                 {meta.error && meta.touched && <div className='text text-red-500'>{meta.error}</div>}
              </div>
            )}
            </Field>
            <hr />
            <button type='submit' disabled={submitting || pristine}
          className="text-white mt-2 mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          Enviar
        </button>
        <button
          type="button"
          onClick={form.reset}
          disabled={submitting || pristine}
          className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          Restablecer
        </button>
          </div>
        </form>
      )}
      >
        
      </Form>
    </div>
  )
}

export default FormularioReactFinalForm
