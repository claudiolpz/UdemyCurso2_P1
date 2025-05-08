import { useSelector, useDispatch } from "react-redux";
import {
  cambiarTemuco,
  cambiarRangers,
  volverMagallanes,
} from "./../redux/features/ascensoSlice";
import {
  sumar,
  restar,
  multiplicar,
  dividir,
  resetear,
} from "./../redux/features/calculadoraSlice";
import {
  iniciarSesion,
  parametrosSlice,
} from "../redux/features/parametrosSlice";

const ReduxEjemplo = () => {
  const ascenso = useSelector((state) => state.ascenso);
  const calculadora = useSelector((state) => state.calculadora);
  const parametros = useSelector((state) => state.parametros);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Ejemplo Redux</h1>
      <hr className="mb-3 mt-3" />
      <div className="pl-5 ml-7 mt-3">
        <ul className="list-disc">
          <li>Capitan: {ascenso.capitan}</li>
          <li>Equipo: {ascenso.equipo}</li>
          <li>posicion: {ascenso.posicion}</li>
        </ul>
      </div>
      <hr className="mb-2 mt-2" />
      <div>
        <button
          onClick={() => dispatch(cambiarTemuco())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cambiar a Temuco
        </button>
        <hr className="mb-2 mt-2" />
        <button
          onClick={() => dispatch(cambiarRangers())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cambiar a Rangers
        </button>
        <hr className="mb-2 mt-2" />
        <button
          onClick={() => dispatch(volverMagallanes())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Volver Magallanes
        </button>
      </div>
      <hr className="mb-2 mt-2" />
      <h1>Ejemplo 2 Redux Calculadora</h1>

      <div className="pl-5 ml-7 mt-3">
        <ul className="list-disc">
          <li>Numero 1: {calculadora.numero1}</li>
          <li>Numero 2: {calculadora.numero2}</li>
          <li>Resultado: {calculadora.resultado}</li>
        </ul>
      </div>
      <div>
        <button
          onClick={() => dispatch(sumar())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sumar
        </button>
        <hr className="mb-2 mt-2" />
        <button
          onClick={() => dispatch(restar())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Restar
        </button>
        <hr className="mb-2 mt-2" />
        <button
          onClick={() => dispatch(multiplicar())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Multiplicar
        </button>
        <hr className="mb-2 mt-2" />
        <button
          onClick={() => dispatch(dividir())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Dividir
        </button>
        <hr className="mb-2 mt-2" />
        <button
          onClick={() => dispatch(resetear())}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Resetear
        </button>
      </div>
      <hr className="mb-2 mt-2" />
      <h1>Ejemplo 3 Redux Parametros</h1>
      <div className="pl-5 ml-7 mt-3">
        <ul className="list-disc">
          <li>Nombre: {parametros.nombre}</li>
          <li>Perfil_id: {parametros.perfil_id}</li>
          <li>Perfil: {parametros.perfil}</li>
        </ul>
      </div>
      <button
      onClick={()=>dispatch(iniciarSesion({
        nombre:"Claudio Lopez",
        perfil_id:1,
        perfil:"Administrador"
      }))}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Iniciar Sesión</button>
    </div>
  );
};

export default ReduxEjemplo;
