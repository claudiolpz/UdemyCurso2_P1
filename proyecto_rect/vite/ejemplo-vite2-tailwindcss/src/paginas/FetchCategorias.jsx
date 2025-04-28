import { Link, useLoaderData, useNavigate } from "react-router";
import { getCategorias, addCategorias, editCategorias,deleteCategorias } from "../servicios/ApiFetch";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";


export async function loader() {
    let datos = await getCategorias();
    return datos;
}

const FetchCategorias = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [nombre, setNombre] = useState("");
  const [acciones, setAcciones] = useState(1);
  const [accionesId, setAccionesId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const datos = useLoaderData();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if(nombre =="" || nombre == 0 || nombre == null){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear la categoria.",
      });
      setNombre("");
      return;
    }
    if(acciones == 1){
      try {
        await addCategorias({ nombre: nombre });
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Categoria creada correctamente.",
        });
        navigate(0);
      }catch (error) {
        console.error("Error al crear la categoría:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo crear la categoría.",
        });
      }
    }else if(acciones == 2){
      try {
        await editCategorias({ nombre: nombre }, accionesId);
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Categoria editada correctamente.",
        });
        navigate(0);
      }catch (error) {
        console.error("Error al editar la categoría:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo editar la categoría.",
        });
      }
    }
  }
  const handleCrear = () => {
    setAcciones(1);
    setNombre("");
    handleShow();
  }
  const handleEditar = async (modulo) => {
    setAcciones(2);
    setAccionesId(modulo.id);
    setNombre(modulo.nombre);
    handleShow();

  }
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
                Categorias
              </span>
            </div>
          </li>
        </ol>
      </nav>
      
      <h1 className="text-center mb-2">Categorias</h1>
      <hr className="mb-4" />
      
     <Modal size="lg" show={show} onHide={handleClose} id="listingModal">
        <Modal.Header>
          <Modal.Title>{acciones === 1?"Crear Categoria":"Editar Categoria"}</Modal.Title>
          <button type="button" className="btn-close" onClick={handleClose}></button>
        </Modal.Header>  
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className='row gy-3'>
              <div className="col-lg-12">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre de la categoria"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  />
              </div>
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6 d-flex justify-content-end">
                <button
                  className="btn btn-primary"
                  >{acciones===1 ? (
                    <>
                    <i className="fas fa-plus"></i> Crear
                    </>
                  ) : (
                    <>
                    <i className="fas fa-edit"></i> Editar
                    </>
                  )}</button>
              </div>
            </div>
          </form>
        </Modal.Body>
     </Modal>

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
                    <Link to="#" onClick={()=>{handleEditar(dato)}}>
                      <i className="fas fa-edit mr-2"></i>
                    </Link>
                    <Link to="#" onClick={()=>{handleEliminar(dato.id)}}>
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
  )
}

export default FetchCategorias
