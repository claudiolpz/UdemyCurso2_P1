import { Link } from "react-router"

const Hooks = () => {
  return (
    <>
    
        <h1>
            Hooks
        </h1>
        <hr />
        <div title="Hooks-div" className="pl-5 ml-7 mt-3">
            <ul className="list-disc">
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/evento-click">Evento Click </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/usestate">Evento UseState </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/onchange">Evento OnChange </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/eventos-varios">Eventos Varios </Link>
                </li>
            </ul>

            

        </div>

    </>
  )
}

export default Hooks
