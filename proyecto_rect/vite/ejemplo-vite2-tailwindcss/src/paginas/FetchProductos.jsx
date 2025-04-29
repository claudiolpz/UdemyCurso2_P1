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
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { set } from "react-hook-form";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        title: "Oops...",
        text: "Seleccione una categoria",
      });
      setCategoria_Id("0");
      return;
    }
    if (nombre == 0 || nombre == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un nombre",
      });
      setNombre("");
      return;
    }
    if (descripcion == 0 || descripcion == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese una descripcion",
      });
      setDescripcion("");
      return;
    }
    if (precio == 0 || precio == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese un precio",
      });
      setPrecio("");
      return;
    }
    if (stock == 0 || stock == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
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
          categorias_id: categorias_id
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
          title: "Oops...",
          text: "Error al crear el producto",
        });
      }
    }
    if(acciones == 2) {
      try {
        await editProductos(
          {
            nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          stock: stock,
          categorias_id: categorias_id
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
          title: "Oops...",
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
    handleShow();
  };
  const handleEditar = async (modulo) => {
    setAcciones(2);
    setAccionesId(modulo.id);
    setNombre(modulo.nombre);
    setDescripcion(modulo.descripcion);
    setPrecio(modulo.precio);
    setStock(modulo.stock);
    setCategoria_Id(modulo.categorias_id);
    handleShow();
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
}
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
              ariaHidden="true"
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
      <Modal size="lg" show={show} onHide={handleClose} id="listingModal">
        <Modal.Header>
          <Modal.Title>
            {acciones === 1 ? "Crear Producto" : "Editar Producto"}
          </Modal.Title>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-lg-12">
                <label htmlFor="categorias_id" className="form-label">
                  Categoria
                </label>
                <select
                  value={categorias_id}
                  id="categorias_id"
                  name="categorias_id"
                  onChange={(e) => setCategoria_Id(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Seleccione una categoria</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-12">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  htmlFor="nombre"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="descripcion" className="form-label">
                  Descripcion
                </label>
                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion del producto"
                ></textarea>
              </div>
              <div className="col-lg-6">
                <label htmlFor="precio" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  className="form-control"
                  id="precio"
                  name="precio"
                  placeholder="Precio del producto"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <select
                  value={stock}
                  id="stock"
                  name="stock"
                  onChange={(e) => setStock(e.target.value)}
                  className="form-control"
                >
                  {(() => {
                    let rows = [];
                    for (let i = 0; i <= 100; i++) {
                      rows.push(
                        <option key={i} value={i}>
                          {i}
                        </option>
                      );
                    }
                    return rows;
                  })()}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6 d-flex justify-content-end">
           
                <button className="btn btn-primary">
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
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FetchProductos;
