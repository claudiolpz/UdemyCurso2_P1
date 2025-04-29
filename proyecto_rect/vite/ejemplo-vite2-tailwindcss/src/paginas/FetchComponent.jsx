import { Link } from 'react-router'

const FetchComponent = () => {
  return (
    <div>
    <h1>Fetch Component</h1>
    <div title="Hooks-div" className="pl-5 ml-7 mt-3">
      <ul className="list-disc"></ul>
      <li>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/fetch/categorias">Categorias</Link>
      </li>
      <li>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/fetch/productos/1">Productos</Link>
      </li>
    </div>
    
  </div>
  )
}

export default FetchComponent
