import { Link, useNavigate } from "react-router"
import { useFormik } from "formik"
import Swal from "sweetalert2"
import { useContext } from "react"
import { authLogin } from "../servicios/ApiAuth"
import  AuthContext  from "../context/AuthProvider"

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
                if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo))){
                    mensaje= mensaje + "<li> El E-mail ingresado no es válido </li>"
                }
                if(!values.password){
                    mensaje = mensaje + "<li> El campo Contraseña es obligatorio </li>"
                }
                if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(values.password)) {
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
    <div>
      <h1>Login</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="correo">Email</label>
            <input
                type="email"
                name="correo"
                id="correo"
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
                value={values.correo}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                className="form-control"
                onChange={handleChange}
                value={values.password}
            />
        </div>
        <button className="btn btn-warning" type="submit">Enviar</button>
      </form>
      <hr />
        <Link to="/acesso/registro" title ="No tienes cuenta?" className="btn btn-secondary mt-8">
            No tienes cuenta?
        </Link>
    </div>
  )
}

export default AccesoLogin
