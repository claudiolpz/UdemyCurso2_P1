import { Link } from "react-router"


const AlmacenamientoLocal = () => {
  return (
    <div>
      <h1>
            Almacenamiento Local
        </h1>
        <hr />
        <div title="Hooks-div" className="pl-5 ml-7 mt-3">
            <ul className="list-disc">
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/localstorage/localstorage">LocalStorage </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/localstorage/sessionstorage">SessionStorage </Link>
                </li>


            
            </ul>
        </div>

    </div>
  )
}

export default AlmacenamientoLocal
