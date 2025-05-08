import { Link } from "react-router"
import dayjs from 'dayjs'
import 'dayjs/locale/es'

const UtilesDayjs = () => {
    let fecha = new Date();
    dayjs.locale('es')
  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/utiles"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Utiles
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Dayjs
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-center mb-2">Dayjs </h1>
      <hr />
      <h3>Formatar Fecha</h3>

      <ul className="list-disc">
        <li className="font-medium mt-2 ml-2">Fecha: {fecha.toString()}</li>
        <li className="font-medium mt-2 ml-2">Fecha: {dayjs(fecha).format('dddd').replace(/\b[a-z]/g, c=> c.toUpperCase())} {dayjs(fecha).format('DD')} de {dayjs(fecha).format('MMMM').replace(/\b[a-z]/g, c=> c.toUpperCase())} de {dayjs(fecha).format('YYYY')} a las {dayjs(fecha).format('HH:mm:ss')}    
         </li>
         <li className="font-medium mt-2 ml-2">Fecha Corta: {dayjs(fecha).format('DD/MM/YYYY')}</li>
         <li className="font-medium mt-2 ml-2">Fecha en timestamp: {fecha.valueOf()}</li>
      </ul>
      <hr className="mb-2 mt-2"/>
      <h3>Calculo con fechas </h3>
      <ul className="list-disc">
        <li className="font-medium mt-2 ml-2">Fecha + 7 dias: {" "}
            {dayjs(fecha).add(7, 'day').format('DD/MM/YYYY')}</li>
        <li className="font-medium mt-2 ml-2">Fecha - 7 dias: {" "}
            {dayjs(fecha).subtract(7, 'day').format('DD/MM/YYYY')}</li>
        <li className="font-medium mt-2 ml-2">Fecha + 7 meses: {" "}
            {dayjs(fecha).subtract(7, 'month').format('DD/MM/YYYY')}</li>
        <li className="font-medium mt-2 ml-2">Fecha + 7 años: {" "}
            {dayjs(fecha).add(7, 'year').format('DD/MM/YYYY')}</li>
      </ul>
    </div>
  )
}

export default UtilesDayjs
