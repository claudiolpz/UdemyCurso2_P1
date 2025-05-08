import Jugador from "./Jugador";

const ComponenteFuncional2v2 = ({ jugadores }) => {
  return (
    <>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Dorsal</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador) => (
            jugador.pais == "Chile" &&
              <Jugador key={jugador.id} jugador={jugador} />
          ))}

        </tbody>
      </table>
    </>
  );
};

export default ComponenteFuncional2v2;
