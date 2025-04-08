import { Link } from "react-router";
import { NavLink } from "react-router";
const Rutas = () => {
  let id = 12;
  let slug = "chester-cortes";
  return (
    <>
      <h1>Rutas</h1>
      <ul className="list-disc pl-5 ml-5">
        <li>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/">Home</Link>
        </li>
        <li>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/sobre-nosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/rutas/path/1/hola-mundo">Ejemplo Rutas Path</Link>
        </li>
        <li>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`/rutas/path/${id}/${slug}`}>
            Ejemplo Rutas Path dinamica
          </Link>
        </li>
        <li>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={`/rutas/query-string?id=${id}&slug=${slug}`}>
            Ejemplo Rutas Query String
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Rutas;
