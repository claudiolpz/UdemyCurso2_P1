import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import {
  getCategorias,
  getProductos,
  addProductos,
  editProductos,
  deleteProductos,
} from "../servicios/ApiFetch";
import { acortarTexto, formatearNumero } from "../helpers/helpers";
import { useState } from "react";

import Swal from "sweetalert2";
import Modal from "../componentes/Modal";
export async function loader({ params }) {
  let datos = await getProductos(params.page);
  let categorias = await getCategorias();
  return [datos, categorias];
}
const FetchProductos = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categorias_id, setCategoria_Id] = useState("0");
  const [acciones, setAcciones] = useState(1);
  const [accionesId, setAccionesId] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [datos, categorias] = useLoaderData();
  const { page } = useParams();
  let anterior;
  let siguiente;

  let pageMenos1 = parseInt(page) - 1;
  if (pageMenos1 <= 1) {
    anterior = 1;
  } else {
    anterior = pageMenos1;
  }

  let pageMas1 = parseInt(page) + 1;
  if (pageMas1 >= datos.links) {
    siguiente = datos.links;
  } else {
    siguiente = pageMas1;
  }

  let paginas = [];
  for (let i = 1; i <= datos.links; i++) {
    paginas[i] = i;
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categorias_id == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops... 1",
        text: "Seleccione una categoria",
      });
      setCategoria_Id("0");
      return;
    }
    if (nombre == 0 || nombre == "") {
      Swal.fire({
        icon: "error",
        title: "Oops... 2",
        text: "Ingrese un nombre",
      });
      setNombre("");
      return;
    }
    if (descripcion == 0 || descripcion == "") {
      Swal.fire({
        icon: "error",
        title: "Oops... 3",
        text: "Ingrese una descripcion",
      });
      setDescripcion("");
      return;
    }
    if (precio == 0 || precio == "") {
      Swal.fire({
        icon: "error",
        title: "Oops... 4",
        text: "Ingrese un precio",
      });
      setPrecio("");
      return;
    }
    if (stock == 0 || stock == "") {
      Swal.fire({
        icon: "error",
        title: "Oops... 6",
        text: "Ingrese un stock",
      });
      setStock("");
      return;
    }
    if (acciones == 1) {
      try {
        await addProductos({
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          stock: stock,
          categorias_id: categorias_id,
        });
        Swal.fire({
          icon: "success",
          title: "Producto creado",
          text: "El producto fue creado correctamente",
        });
        navigate(0);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops... 7",
          text: "Error al crear el producto",
        });
      }
    }
    if (acciones == 2) {
      try {
        await editProductos(
          {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            stock: stock,
            categorias_id: categorias_id,
          },
          accionesId
        );
        Swal.fire({
          icon: "success",
          title: "Producto editado",
          text: "El producto fue editado correctamente",
        });
        navigate(0);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops... 9",
          text: "Error al editar el producto",
        });
      }
    }
  };

  const handleCrear = () => {
    setAcciones(1);
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setStock("");
    setCategoria_Id("0");
    handleOpen();
  };
  const handleEditar = async (modulo) => {
    setAcciones(2);
    setAccionesId(modulo.id);
    setNombre(modulo.nombre);
    setDescripcion(modulo.descripcion);
    setPrecio(modulo.precio);
    setStock(modulo.stock);
    setCategoria_Id(modulo.categorias_id);
    handleOpen();
  };
  const dentroEliminar = async (id) => {
    try {
      await deleteProductos(id);
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Producto eliminado correctamente.",
      });
      navigate(0);
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el producto.",
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
                Productos
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-center mb-2">
        Productos Fetch ({datos.total} registros en total) ({datos.por_pagina}{" "}
        registros por pagina)
      </h1>
      <hr className="mb-4" />
      <Link
        type="button"
        to="#"
        onClick={handleCrear}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <i className="fas fa-plus"></i> Crear
      </Link>
      <hr className="mb-4" />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categoria
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descripcion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fotos
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {datos.datos.map((dato) => (
                  <tr
                    key={dato.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <td className="px-6 py-4">{dato.id}</td>

                    <td>
                      <Link
                        to={`/axios/productos/categorias/${dato.categoria_slug}/1`}
                        className="!text-blue-500 hover:!text-blue-800 hover:!underline "
                      >
                        {dato.categoria}
                      </Link>
                    </td>
                    <td className="px-6 py-4">{dato.nombre}</td>
                    <td className="px-6 py-4">
                      {acortarTexto(dato.descripcion, 0, 100)}
                    </td>
                    <td className="px-6 py-4">
                      ${formatearNumero(dato.precio)}
                    </td>
                    <td className="px-6 py-4">{dato.stock}</td>
                    <td>
                      <Link to={`/axios/productos/categorias`}>
                        <i className="fas fa-camera mr-2"></i>
                      </Link>
                    </td>
                    <td>
                      <Link to="#" onClick={() => handleEditar(dato)}>
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

            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-base h-10 mt-5">
                <li>
                  <Link
                    to={`/fetch/productos/1`}
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Primera
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/fetch/productos/${anterior}`}
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Anterior
                  </Link>
                </li>
                {/* paginacion numerica */}
                {[...paginas].map((x, i) => (
                  <li key={i}>
                    {i >= 1 && (
                      <Link
                        to={`/fetch/productos/${i}`}
                        className={`${
                          page == i
                            ? "flex items-center justify-center px-4 h-10 ms-0 text-white border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        }`}
                      >
                        {i}
                      </Link>
                    )}
                  </li>
                ))}
                {/* fin paginacion numerica */}
                <li>
                  <Link
                    to={`/fetch/productos/${siguiente}`}
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Siguiente
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/fetch/productos/${datos.links}`}
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Ultima
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <Modal open={open} onClose={handleClose}>
        <div
          id="crud-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {acciones === 1 ? "Crear Producto" : "Editar Producto"}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClose}
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
                <div className="space-y-4 p-6">
                  <div>
                    <label
                      htmlFor="categorias_id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Categoría
                    </label>
                    <select
                      value={categorias_id}
                      id="categorias_id"
                      name="categorias_id"
                      onChange={(e) => setCategoria_Id(e.target.value)}
                      className="block w-full p-2.5 h-12 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="0">Seleccione una categoría</option>
                      {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                          {categoria.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="block w-full p-2.5 h-12 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre del producto"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="descripcion"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Descripción
                    </label>
                    <textarea
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      className="block w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      id="descripcion"
                      name="descripcion"
                      placeholder="Descripción del producto"
                      rows="4"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="precio"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Precio
                    </label>
                    <input
                      type="number"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                      className="block w-full p-2.5 h-12 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      id="precio"
                      name="precio"
                      placeholder="Precio del producto"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="stock"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Stock
                    </label>
                    <select
                      value={stock}
                      id="stock"
                      name="stock"
                      onChange={(e) => setStock(e.target.value)}
                      className="block w-full p-2.5 h-12 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      {Array.from({ length: 101 }, (_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4 p-6">
                  <button
                    type="submit"
                    className=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2"
                  >
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
                    type="button"
                    onClick={handleClose}
                    className="ms-3 text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-4 py-2"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FetchProductos;
