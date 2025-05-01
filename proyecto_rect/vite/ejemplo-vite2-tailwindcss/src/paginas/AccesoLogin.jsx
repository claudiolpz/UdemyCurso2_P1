import { Link, useNavigate } from "react-router"
import { useFormik } from "formik"
import Swal from "sweetalert2"
import { useContext } from "react"
import { authLogin } from "../servicios/ApiAuth"
import  AuthContext  from "../context/AuthProvider"
import {expresion_password, expresion_correo} from "../validaciones";

const AccesoLogin = () => {
    const navigate = useNavigate()
    const {handleIniciarSesion} = useContext(AuthContext)
    const {handleSubmit, handleChange, values} = useFormik({
            initialValues:{
                correo:"",
                password:""
            },
            onSubmit: async function (values) {
                let mensaje='';
                if(!values.correo){
                    mensaje = mensaje + "<li> El campo E-Mail es obligatorio </li>"
                }
                if(!expresion_correo.test(values.correo)){
                    mensaje= mensaje + "<li> El E-mail ingresado no es válido </li>"
                }
                if(!values.password){
                    mensaje = mensaje + "<li> El campo Contraseña es obligatorio </li>"
                }
                if(!expresion_password.test(values.password)) {
                    mensaje = mensaje + "<li>La constraseña debe tener al menos 1 número, una mayuscula, y un lago entre 6 y 20 caracteres.</li>"
                }
    
                console.log(mensaje)
                if(mensaje ==''){
                    let logueado = await authLogin({correo: values.correo, password: values.password})
                    if(logueado.estado == 'ok'){
                        handleIniciarSesion(logueado.token, logueado.nombre);
                        navigate('/acceso/protegido')
                    }
                  
                }else{
                    Swal.fire({
                        icon:'error',
                        title:'ERROR',
                        html:`<ul>${mensaje}</ul>`
                    })
                 
                }
                
            }
        })
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="correo"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            placeholder="Email"
            className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={handleChange}
            value={values.correo}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 rounded-lg focus:ring-4 focus:ring-yellow-300"
        >
          Enviar
        </button>
      </form>
      <hr className="my-6" />
      <Link
        to="/acesso/registro"
        title="No tienes cuenta?"
        className="block text-center bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 rounded-lg"
      >
        No tienes cuenta?
      </Link>
    </div>
  )
}

export default AccesoLogin
