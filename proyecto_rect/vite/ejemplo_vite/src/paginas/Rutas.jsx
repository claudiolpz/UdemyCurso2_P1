import { NavLink, Link} from 'react-router'

const Rutas = () => {
  let id=12;
  let slug="chester-cortes"
  return (
    <>
    <h1>Rutas</h1>
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        </li>
        <li>
        <Link to="/rutas/path/1/hola-mundo">Ejemplo Rutas Path</Link>
        </li>
        <li>
        <Link to={`/rutas/path/${id}/${slug}`}>Ejemplo Rutas Path dinamica</Link>
        </li>
        <li>
        <Link to={`/rutas/query-string?id=${id}&slug=${slug}`}>Ejemplo Rutas Query String</Link>
        </li>
    </ul>
    </>
  )
}

export default Rutas
