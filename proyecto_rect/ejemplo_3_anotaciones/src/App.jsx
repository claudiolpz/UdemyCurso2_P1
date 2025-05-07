import { useLoaderData } from "react-router";
import Listado from "./components/Listado";
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
            <Listado datos={datos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
