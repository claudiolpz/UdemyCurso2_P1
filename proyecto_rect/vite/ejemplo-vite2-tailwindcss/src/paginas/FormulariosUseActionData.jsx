import { Link, Form, useActionData } from "react-router";
import Swal from "sweetalert2";
import { atributos, categorias_productos } from "../datos/datos";
import { useState } from "react";
import Validaciones from "../componentes/Validaciones";

export async function action({ request }) {
  // siempre los action deben retornar algo, si no f aplicacion
  const formData = await request.formData();
  const categoriaSeleccionada = categorias_productos.find(
    (categoria) => categoria.id === parseInt(formData.get("categoria"))
  );
  const nombreCategoria = categoriaSeleccionada
    ? categoriaSeleccionada.nombre
    : "Categoría no encontrada";

  const datos = Object.fromEntries(formData); // 2da opcion
  //   console.log(formData)

  let errores = [];

  if (formData.get("categoria") == "0") {
    errores.push("Debe seleccionar al menos una categoría");
  }
  if (Object.values(datos).includes('')) {
    errores.push("Todos los campos son obligatorios");
  }
  let expresiones_precios = new RegExp("[0-9]");
  console.log(errores);
  if (!expresiones_precios.test(formData.get("precio"))) {
    errores.push("El precio solo debe tener números");
  }
  const atributosSeleccionados = atributos.some(
    (atributo) => formData.get(`atributo_${atributo.id}`) != null
  );
  if (!atributosSeleccionados) {
    errores.push("Debe seleccionar al menos un atributo");
  }
  if (Object.keys(errores).length) {
    return errores;
  }

  // if (Object.keys(errores).length) {
  //   return Swal.fire({
  //     icon: "error",
  //     title: "ERROR",
  //     text: `${errores}`,
  //   });
  // }
  //Recibir checkbox dinamicos
  let arreglo = [];
  let mensajeArreglo = "";
  atributos.forEach((atributo) => {
    if (formData.get("atributo_" + atributo.id) != null) {
      arreglo.push(atributo.id);
      mensajeArreglo = mensajeArreglo + atributo.nombre + ",";
    }
  });

  if (!Object.keys(errores).length) {
    return Swal.fire({
      icon: "success",
      title: "OK",
      text: `El nombre es es ${formData.get("nombre")} | Nombre: ${
        datos.nombre
      } | Categoria: ${nombreCategoria} | Peligroso : ${formData.get(
        "peligroso"
      )} | Atributos : ${mensajeArreglo}`,
    });
  }
}
const FormulariosUseActionData = () => {
  const [peligroso, setPeligroso] = useState(false);
  const handlePeligroso = () => {
    setPeligroso(!peligroso);
  };
  const errores = useActionData();
  console.log(errores)
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
                Formulario Use Action Data
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-center">Formulario Use Action Data </h1>
      <hr />
        {errores?.length && <Validaciones errores = {errores}/>}

      <Form className="max-w-sm mx-auto" method="POST" noValidate> {/* Aseguramos de que el form no tome validaciones de html, y tome lo implementado en el action*/}
       
        <div className="flex flex-col  justify-center mt-5 mb-5">
          <label
            htmlFor="categoria"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Categorias
          </label>
          <select
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="categoria"
            name="categoria"
          >
            <option value="0">Seleccione.....</option>
            {categorias_productos.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="Nombre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Precios"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Precios
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            min="0"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Precio"
          />
        </div>
        <hr />
        <div>
          <label
            htmlFor="destacado"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Destacado
          </label>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="destacado"
              value="si"
              id="destacado1"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="destacado1"
              className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Si
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="destacado"
              value="no"
              id="destacado2"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="destacado2"
              className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
        <hr />
        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripcion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <hr />

        <div className="mb-4 mt-2 ">
          <label
            htmlFor="peligroso"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Peligroso
          </label>
          <div className="flex items-center">
            <input
              id="peligroso"
              type="checkbox"
              name="peligroso"
              value={peligroso}
              onChange={handlePeligroso}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="peligroso"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Peligroso
            </label>
          </div>
        </div>
        <hr />
        <div className="mb-4 mt-2 ">
          <label
            htmlFor="atributos"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Atributos
          </label>
          {atributos.map((atributos) => (
            <div className="flex items-center" key={atributos.id}>
              <input
                name={`atributo_${atributos.id}`}
                id={`atributo_${atributos.id}`}
                value={atributos.id}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor=""
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {atributos.nombre}
              </label>
            </div>
          ))}
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Enviar
        </button>
      </Form>
    </div>
  );
};

export default FormulariosUseActionData;
