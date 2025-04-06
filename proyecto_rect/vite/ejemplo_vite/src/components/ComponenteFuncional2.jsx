 
    const ComponenteFuncional2 = ({prop1, nombre, paises}) => {
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
                <li key={pais.id}>
                    {pais.nombre}
                </li>
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
            {paises.map((pais) => (
                <tr key={pais.id}>
                    <td>{pais.id}</td>
                    <td>{pais.nombre}</td>
                    <td>{pais.capital}</td>
                </tr>
            ))}
        </tbody>

      </table>
      </>
    )
  }
  
  export default ComponenteFuncional2
  