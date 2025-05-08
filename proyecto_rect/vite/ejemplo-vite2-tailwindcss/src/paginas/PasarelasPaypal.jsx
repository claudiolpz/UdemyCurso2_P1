import { Link, useLoaderData } from "react-router";
import { paypalCrearOrden } from "../servicios/ApiPaypal";

export async function loader() {
  let datos = paypalCrearOrden({ amount: 10 });
  return datos;
}
const PasarelasPaypal = () => {
  const datos = useLoaderData();
  console.log(datos);
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
                to="/pasarelas"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Pasarelas
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
                Paypal
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="mt-3">Paypal</h1>
      <hr />
      <div>
        <ul className="pl-5 ml-7 mt-3 list-disc">
          <li>
            <strong>Producto</strong>:Mesa de Computador
          </li>
          <li>
            <strong>Precio</strong>: USD$ 10
          </li>
          <li>
            <strong>cantidad</strong>: 1
          </li>
          <li>
            <strong>orden de compra</strong>: 34324
          </li>
          <li>
            <strong>Token</strong>: {datos.orden}
          </li>
          <li>
            <strong>url</strong>: {datos.url}
          </li>
        </ul>
      </div>
      <Link
        to={datos.url}
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:ring-4 focus:ring-blue-300"
      >
        <i className="fab fa-paypal mr-2"></i> Pagar con PayPal
      </Link>
    </div>
  );
};

export default PasarelasPaypal;
