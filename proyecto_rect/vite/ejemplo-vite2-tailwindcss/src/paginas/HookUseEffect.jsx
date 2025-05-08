import { Link } from "react-router";
import { useEffect, useState } from "react";

const HookUseEffect = () => {
    
    let [arreglo, setArreglo] = useState([]);
    let [marcador, setMarcador] = useState();
    console.log(arreglo);
    useEffect(() => {
        return() => {
            setArreglo(
                [
                    {
                        id:1,
                        nombre:"Chester Cortes",
                        correo:"Chester@maga.cl"
                    },
                    {
                        id:2,
                        nombre:"Manuel Vicuña",
                        correo:"Vicu@maga.cl"
                    }
                ]
            )
        }
    }, [marcador]);

    const mostrarArreglo = (valor) => {
        setMarcador(valor);
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
                to="/hooks"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Hooks
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
                Eventos Use Effect
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-center">Eventos Use Effect</h1>
      <hr /> 
      <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{mostrarArreglo(1)}} > Mostrar Arreglo <i className="fa-regular fa-hand-pointer"></i></button>
      <button type="button" className="!ml-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{mostrarArreglo(0)}}> Esconder Arreglo <i className="fa-regular fa-hand-pointer"></i></button>

        {marcador==1 && (
            <>
            <hr />
            <ul className="list-disc">
                {arreglo.map((item) => (
                    <li key={item.id}>
                        <h1 className="text-center">Nombre: {item.nombre}</h1>
                        <h1 className="text-center">Correo: {item.correo}</h1>
                    </li>
                ))}
            </ul>
            </>
        )}
    </div>
  )
}

export default HookUseEffect
