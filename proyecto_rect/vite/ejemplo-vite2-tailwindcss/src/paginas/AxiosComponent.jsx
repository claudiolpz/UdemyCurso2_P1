import { Link } from "react-router";

const AxiosComponent = () => {
  return (
    <div>
      <h1>Axios</h1>
      <div title="Hooks-div" className="pl-5 ml-7 mt-3">
        <ul className="list-disc"></ul>
        <li>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/axios/categorias">Categorias</Link>
        </li>
        <li>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-2" to="/axios/productos">Productos</Link>
        </li>
      </div>
    </div>
  );
};

export default AxiosComponent;
