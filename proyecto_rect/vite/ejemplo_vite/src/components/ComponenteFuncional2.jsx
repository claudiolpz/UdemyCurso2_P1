import Pais from "./Pais";

const ComponenteFuncional2 = ({ prop1, nombre, paises }) => {
  return (
    <>
      <h3>desde componente2 funcional</h3>

      <ul>
        <li>Prop1: {prop1}</li>
        <li>Nombre: {nombre}</li>
        <li>
          Paises:
          <ul>
            {paises.map((pais) => (
              <li key={pais.id}>{pais.nombre}</li>
            ))}
          </ul>
        </li>
      </ul>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais) =>
            pais.nombre == "Chile" ? <Pais key={pais.id} pais={pais} /> : null
          )}

          {paises.map(
            (pais) =>
              pais.nombre == "Argentina" && <Pais key={pais.id} pais={pais} />
          )}
        </tbody>
      </table>
    </>
  );
};


export default ComponenteFuncional2;
