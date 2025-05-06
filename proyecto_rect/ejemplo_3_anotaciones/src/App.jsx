
import Listado from './components/Listado'
export const loader = async () => {
  return null
}

function App() {
  return (
    <div>
    <div className="container">
      <div className='card mb-3'>
        <div className='card-header text-white bg-danger'>
          <h3>Anotaciones con Axios, Tiny, Bootstrap, y API REST (Obtener tokens automaticamente)</h3>

        </div>
        <div className='card-body'>
          <Listado/>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default App
