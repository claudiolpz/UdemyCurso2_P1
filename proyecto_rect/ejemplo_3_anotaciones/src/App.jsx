import { useLoaderData } from "react-router";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import { getAnotaciones } from "./service/ApiRest";

export const loader = async () => {
  let datos = getAnotaciones();
  return datos;
};

function App() {
  const datos = useLoaderData();
  return (
    <div>
      <div className="container">
        <div className="card mb-3">
          <div className="card-header text-white bg-danger">
            <h3>
              Anotaciones con Axios, Tiny, Bootstrap, y API REST (Obtener tokens
              automaticamente)
            </h3>
          </div>
          <div className="card-body">
            <Formulario />
            <Listado datos={datos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
