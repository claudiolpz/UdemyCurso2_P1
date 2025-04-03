function App() {
  let edad = 21;
  let numero = 13;
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
            return(<div>Numero es 13</div>);
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
          {[...Array(11)].map((x,i) => (
            <li key={i}>{i}</li>
          ))}

        </ul>
      <h3>Loop IIFE</h3>
          <ul>
            {(function(rows, i, len){
              while (++i <= len){
                rows.push(<li key={i}>{i}</li>);
              }
              return rows;
            })([], 0, 10)}
          </ul>

      <h3>ES2015 y array</h3>
        <ul>
            {Array(11).fill(1).map((el,i)=>
              <li key={i}>{i}</li>
            )}
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
    </>
  );
}

export default App;
