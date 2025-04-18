import { useContext } from "react";
import EjemploContext from "../context/EjemploProvider";

const ContexEjemplo = () => {
  const {variableContexto, saludar, stateContext, setStateContext} = useContext(EjemploContext)
  const handleCambiarState = ()=>{
    setStateContext("Nuevo texto Contexto JIJIJAJA")
}
  return (
    <div>
      <h1>Ejemplo Context</h1>
      <hr className="mb-2 mt-2"/>
      <p>Valor: {variableContexto}</p>
      <br />
      <p>{saludar("Magallanes")}</p>
      <br />
      <p>{stateContext}</p>
      <br />
     
      <button
      onClick={handleCambiarState}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  
      >Cambiar</button>
     
    </div>
  )
}

export default ContexEjemplo
