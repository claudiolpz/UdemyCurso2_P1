import { Link, Form, useActionData } from "react-router";
import Swal from "sweetalert2";
import Validaciones from "../componentes/Validaciones";
import { authRegistro } from "../servicios/ApiAuth";
import {expresion_password, expresion_correo} from "../validaciones";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  if(!expresion_correo.test(formData.get("email"))){
    errores.push("El email no es valido");
  }
  if(datos.password !== datos.password2){
    errores.push("Las contraseñas no son iguales");
  }
  if(!expresion_password.test(datos.password)){
    errores.push("La contraseña no es valida, debe tener al menos 6 caracteres, una mayuscula y un numero");
  }
  if(Object.keys(errores).length){
    return errores;
  }
  let registrado = await authRegistro({nombre:datos.nombre, correo:datos.email, password:datos.password});
  if(registrado.estado=='ok'){
    Swal.fire({
      icon:'success',
      title:'Registro exitoso',
      text: "El usuario se registro correctamente",
    })
    setInterval(() => {
        window.location = windwos.location.href;
        }   , 2000);
        return true;
    }
  else{
    return Swal.fire({
        icon:'error',
        title:'Error',
        text: "Ocurrio un error al registrar el usuario",
    })
  }
}
const AccesoRegistro = () => {
  const errores = useActionData();
  return (
    <div>
      <h1>Registro</h1>
      {errores?.length && <Validaciones errores={errores} />}
      <Form method="post" noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Repetir Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Repetir Password"
            className="form-control"
          />
        </div>
        <hr />
        <button className="btn btn-primary">Enviar</button>
      </Form>
        <Link to="/acesso/login" className="btn btn-secondary mt-8">
            Ya tienes cuenta? Inicia sesion
        </Link>
    </div>
  );
};

export default AccesoRegistro;
