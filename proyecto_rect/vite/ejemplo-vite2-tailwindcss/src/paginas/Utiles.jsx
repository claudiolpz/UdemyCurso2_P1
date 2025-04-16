import React from 'react'
import { Link } from 'react-router'

const Utiles = () => {
  return (
    <div>
    <h1>Útiles</h1>
  
  <hr />
  <div title="Hooks-div" className="pl-5 ml-7 mt-3">
          <ul className="list-disc">
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/dayjs">Dayjs </Link>
              </li>
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/moment">Moment </Link>
              </li>
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/spinner">Spinner </Link>
              </li>
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/swipeable">React Swipeable List </Link>
              </li>
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/webcam">Webcam </Link>
              </li>
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/graficos">Gráficos </Link>
              </li>
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/mapas1">Mapas clásicos</Link>
              </li>
              <li >
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/utiles/mapas2">Mapas Mapbox </Link>
              </li>
          </ul>

          

      </div>
  </div>
  )
}

export default Utiles
