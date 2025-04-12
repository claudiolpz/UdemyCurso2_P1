import React from 'react'
import { Link } from 'react-router'


const Formularios = () => {
  return (
    <div>
      <h1>Formularios</h1>
    
    <hr />
    <div title="Hooks-div" className="pl-5 ml-7 mt-3">
            <ul className="list-disc">
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/formulario-simple">Formulario Simple </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/formulario/useactiondata">Formulario Use Action Data </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/formulario/formik">Formulario Formik </Link>
                </li>
               
               
            </ul>

            

        </div>
    </div>
  )
}

export default Formularios
