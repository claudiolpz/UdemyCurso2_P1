import { Link, useLoaderData } from "react-router"
import { webpayRespuesta } from "../servicios/ApiWebpay"

export async function loader({ request }) {
    const url = new URL(request.url);
    const token = url.searchParams.get("token_ws");
  
    if (!token) {
      throw new Response("Token no encontrado", { status: 400 });
    }
    console.log(token);
    const datos = await webpayRespuesta({ token_ws: token });
    return datos;
  }
  
const PasarelasWebpayRespuesta = () => {
    const datos = useLoaderData();
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
                to="/pasarelas/webpay"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Webpay
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
                Webpay Respuesta
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="mt-3">Webpay Respuesta</h1>
    <hr />
    <ul className="pl-5 ml-7 mt-3 list-disc space-y-2">
  <li className="text-gray-700">
    <strong className="font-medium">VCI:</strong> <span>{datos?.vci}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Amount:</strong> <span>{datos?.amount}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Status:</strong> <span>{datos?.status}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Buy Order:</strong> <span>{datos?.buy_order}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Session ID:</strong> <span>{datos?.session_id}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Card Detail:</strong> <span>{datos?.card_detail?.card_number}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Accounting Date:</strong> <span>{datos?.accounting_date}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Transaction Date:</strong> <span>{datos?.transaction_date}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Authorization Code:</strong> <span>{datos?.authorization_code}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Payment Type Code:</strong> <span>{datos?.payment_type_code}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Response Code:</strong> <span>{datos?.response_code}</span>
  </li>
  <li className="text-gray-700">
    <strong className="font-medium">Installments Number:</strong> <span>{datos?.installments_number}</span>
  </li>
</ul>
    </div>
  )
}

export default PasarelasWebpayRespuesta
