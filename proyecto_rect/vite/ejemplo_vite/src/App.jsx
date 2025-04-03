import { formatearFecha, formatearNumero, acortarTexto } from "./helpers/helpers";

function App() {
  let edad = 21;
  let numero = 13;
  let paises = [
    { nombre: "Argentina", capital: "Buenos Aires" },
    { nombre: "Chile", capital: "Santiago" },
    { nombre: "Peru", capital: "Lima" },
    { nombre: "Colombia", capital: "Bogota" },
    { nombre: "Uruguay", capital: "Montevideo" },
    { nombre: "Paraguay", capital: "Asuncion" },
    { nombre: "Venezuela", capital: "Caracas" },
    { nombre: "Ecuador", capital: "Quito" },
    { nombre: "Bolivia", capital: "Sucre" },
    { nombre: "Brasil", capital: "Brasilia" },
  ];
  let fecha = new Date();
  let cantidad = 12345;
  let texto = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
  return (
    <>
      <h1>Renderizado conditional</h1>
      {edad >= 18 && (
        <div>
          Persona mayor de edad <hr />
        </div>
      )}
      <hr />
      {edad >= 18 ? (
        <div>Persona mayor de edad</div>
      ) : (
        <div>Persona menor de edad</div>
      )}

      <hr />
      <h1>Switch Case</h1>

      {(() => {
        switch (numero) {
          case 13:
            return <div>Numero es 13</div>;
          case 14:
            return <div>Numero es 14</div>;
          default:
            return <div>Numero no es 13 ni 14</div>;
        }
      })()}
      <hr />
      <h1>EJEMPLOS LOOP</h1>
      <h3>Loop Normal ES6</h3>
      <ul>
        {[...Array(11)].map((x, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <h3>Loop IIFE</h3>
      <ul>
        {(function (rows, i, len) {
          while (++i <= len) {
            rows.push(<li key={i}>{i}</li>);
          }
          return rows;
        })([], 0, 10)}
      </ul>

      <h3>ES2015 y array</h3>
      <ul>
        {Array(11)
          .fill(1)
          .map((el, i) => (
            <li key={i}>{i}</li>
          ))}
      </ul>
      <h3>Ciclo Sencillo</h3>
      <ul>
        {(() => {
          let rows = [];
          for (let i = 0; i <= 10; i++) {
            rows.push(<li key={i}>{i}</li>);
          }
          return rows;
        })()}
      </ul>

      <hr />

      <h1>Recorrer Elementos Con Map</h1>
      <ul>
        {paises.map((pais, index)=>(
          <li key={pais.nombre}>
           {index}- {pais.nombre} (El dominio es: {pais.capital})
          </li>
        ))}
      </ul>
      <hr />
      <h1>Helpers Personalizados</h1>
      <ul>
        <li>Fecha:{formatearFecha(fecha)}</li>
        <li>Cantidad: {`USD$ ${formatearNumero(cantidad)}`}</li>
        <li>Texto: {acortarTexto(texto, 0, 100)}....</li>
      </ul>
    </>
  );
}

export default App;
