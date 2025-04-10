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
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/use-effect">Eventos Use Effect </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/custom-hooks">Custom Hooks</Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/useloaderdata">UseLoaderData</Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/usenavigate">UseNavegate</Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/uselocation">UseLocation</Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/hooks/useref">UseRef</Link>
                </li>
            </ul>

            

        </div>

    </>
  )
}

export default Hooks
