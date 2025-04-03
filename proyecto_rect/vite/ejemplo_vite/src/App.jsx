
function App() {
  let edad = 21;
  return (
    <>
      <h1>Renderizado conditional</h1>
      {(edad>=18) && (
        <div>Persona mayor de edad <hr /></div>
      )}
      <hr />
      {(edad>=18) ? (
        <div>Persona mayor de edad</div>
      ) : (
        <div>Persona menor de edad</div>
      )}
    </>
  );
}

export default App;
