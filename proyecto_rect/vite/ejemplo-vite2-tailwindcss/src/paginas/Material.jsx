import { Link } from "react-router"

const Material = () => {
  return (
    <div>
         <h1>
            Material
        </h1>
        <hr />
      <div title="Material-div" className="pl-5 ml-7 mt-3">
                <ul className="list-disc">
                    <li >
                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/material/botones">Botones </Link>
                    </li>
                </ul>
      
                
      
            </div>
    </div>
  )
}

export default Material
