const Jugador = ({ jugador }) => {
  return (
    <tr key={jugador.id}>
      <td>{jugador.id}</td>
      <td>{jugador.nombre}</td>
      <td>{jugador.nacionalidad}</td>
      <td>{jugador.dorsal}</td>
    </tr>
  );
};

export default Jugador;
