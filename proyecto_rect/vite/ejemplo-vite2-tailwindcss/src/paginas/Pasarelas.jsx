import { Link } from "react-router"
const Pasarelas = () => {
  return (
    <div>
        <h1>Pasarelas</h1>
        <hr />
        <div title="pasarelas-div" className="pl-5 ml-7 mt-3">
            <ul className="list-disc">
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" title="Webpay" to="/pasarelas/webpay">WebPay </Link>
                </li>
                <li >
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" title="Paypal" to="/pasarelas/paypal">Paypal </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Pasarelas
