import { Link, useLoaderData, useNavigate } from "react-router";
import {
  getCategorias,
  addCategorias,
  editCategorias,
  deleteCategorias,
} from "../servicios/ApiFetch";
import { useState } from "react";
import Swal from "sweetalert2";

export async function loader() {
  let datos = await getCategorias();
  return datos;
}
import Modal from "../componentes/Modal";
const FetchCategorias = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [acciones, setAcciones] = useState(1);
  const [accionesId, setAccionesId] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const datos = useLoaderData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombre == "" || nombre == 0 || nombre == null) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear la categoria.",
      });
      setNombre("");
      return;
    }
    if (acciones == 1) {
      try {
        await addCategorias({ nombre: nombre });
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Categoria creada correctamente.",
        });
        navigate(0);
      } catch (error) {
        console.error("Error al crear la categoría:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo crear la categoría.",
        });
      }
    } else if (acciones == 2) {
      try {
        await editCategorias({ nombre: nombre }, accionesId);
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Categoria editada correctamente.",
        });
        navigate(0);
      } catch (error) {
        console.error("Error al editar la categoría:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo editar la categoría.",
        });
      }
    }
  };
  const handleCrear = () => {
    setAcciones(1);
    setNombre("");
    handleOpen();
  };
  const handleEditar = async (modulo) => {
    setAcciones(2);
    setAccionesId(modulo.id);
    setNombre(modulo.nombre);
    handleOpen();
  };
  const dentroEliminar = async (id) => {
    try {
      await deleteCategorias({}, id);
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Categoria eliminada correctamente.",
      });
      navigate(0);
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar la categoría.",
      });
    }
  };
  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dentroEliminar(id);
      }
    });
  };
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
                to="/fetch"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Fetch
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
                Categorias
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-center mb-2">Categorias</h1>
      <hr className="mb-4" />

      {/* INICIO MODAL TAILWINDCSS */}
      <Modal open={open} onClose={handleClose}>
        <div
          id="crud-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Fondo negro */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Contenido del modal */}
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {acciones === 1 ? "Crear Categoria" : "Editar Categoria"}
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6 space-y-6">
                  <label
                    htmlFor="Nombre"
                    className="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nombre"
                  />
                </div>
                <div className="p-6">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {acciones === 1 ? (
                      <>
                        <i className="fas fa-plus"></i> Crear
                      </>
                    ) : (
                      <>
                        <i className="fas fa-edit"></i> Editar
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleClose}
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      {/* FIN MODAL TAILWINDCSS */}
      <button
        onClick={handleCrear}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <i className="fas fa-plus"></i> Crear
      </button>

      <div className="relative overflow-x-auto">
        {Object.values(datos).length == 0 ? (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">No hay registros</span>
            </div>
          </div>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {datos.map((dato) => (
                <tr
                  key={dato.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4">{dato.id}</td>
                  <td className="px-6 py-4">{dato.nombre}</td>
                  <td>
                    <Link
                      to="#"
                      onClick={() => {
                        handleEditar(dato);
                      }}
                    >
                      <i className="fas fa-edit mr-2"></i>
                    </Link>
                    <Link
                      to="#"
                      onClick={() => {
                        handleEliminar(dato.id);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FetchCategorias;
