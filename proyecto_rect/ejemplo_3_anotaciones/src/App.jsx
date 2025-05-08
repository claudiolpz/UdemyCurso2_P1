import { useLoaderData, useNavigate } from "react-router";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import { getAnotaciones, deleteAnotacion } from "./service/ApiRest";
import Swal from "sweetalert2";

export const loader = async () => {
  let datos = getAnotaciones();
  return datos;
};

function App() {
  const navigate = useNavigate()
  const datos = useLoaderData();
  const dentroEliminar = async (id) =>{
    if(await deleteAnotacion(id)===201){
      Swal.fire({
        icon:'success',
        title:'OK',
        text:'Se elimino el registro exitosamente'
      })
      navigate(0)
    }else{
      return Swal.fire({
        icon:'error',
        title:'Ops',
        text: 'No es posible eliminar el registro en estos momentos'
      })
    }
  }
  const handleEliminar = (id) =>{
    Swal.fire({
      title:'Realmente desea Eliminar este registro??',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'NO',
      confirmButtonText:'SI'
    }).then((result)=>{
      if(result.isConfirmed){
        dentroEliminar(id);
      }
    })
  }
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
            <Listado datos={datos} handleEliminar={handleEliminar}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
