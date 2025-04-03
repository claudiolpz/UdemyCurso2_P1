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
    </>
  );
}

export default App;
