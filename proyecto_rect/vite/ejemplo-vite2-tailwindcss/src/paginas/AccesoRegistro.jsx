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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Registro</h1>
      {errores?.length && <Validaciones errores={errores} />}
      <Form method="post" noValidate>
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password2"
            className="block text-sm font-medium text-gray-700"
          >
            Repetir Contraseña
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Repetir Contraseña"
            className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <hr className="my-6" />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg focus:ring-4 focus:ring-blue-300"
        >
          Enviar
        </button>
      </Form>
      <Link
        to="/acceso/login"
        className="block text-center bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 rounded-lg mt-4"
      >
        Ya tienes cuenta? Inicia sesión
      </Link>
    </div>
  );
};

export default AccesoRegistro;
