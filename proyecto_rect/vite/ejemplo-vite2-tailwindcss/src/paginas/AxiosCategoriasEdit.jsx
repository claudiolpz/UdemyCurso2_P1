import { Link, Form, redirect, useLoaderData } from "react-router";
import { getCategoriasPorId, editCategorias } from "../servicios/ApiAxios";
import Swal from "sweetalert2";

export async function loader({ params }) {
  let datos = await getCategoriasPorId(params.id);
  if (Object.values(datos).length == 0) {
    redirect("/error");
  }
  return datos;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  if (Object.keys(errores).length) {
    return errores;
  }
  if ((await editCategorias({ nombre: datos.nombre }, params.id)) === 201) {
    Swal.fire({
      icon: "success",
      title: "OK",
      text: "Se creo el registro exitosamente",
    });
    return redirect("/axios/categorias");
  } else {
    return Swal.fire({
      icon: "error",
      title: "Ops",
      text: "Error inesperado",
    });
  }
}

const AxiosCategoriasEdit = () => {
  const datos = useLoaderData();
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
          <li className="inline-flex items-center">
            <Link
              to="/axios/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />{" "}
              </svg>
              Axios
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
                to="/axios/categorias/"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Categorias
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
                Editar
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-center mb-2">Editar </h1>
      <hr className="mb-4" />
      <Form method="post" className="max-w-sm mx-auto" noValidate>
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
            defaultValue={datos.nombre}
            required
          />
        </div>
        <hr />
        <button className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Enviar
        </button>
      </Form>
    </div>
  );
};

export default AxiosCategoriasEdit;
