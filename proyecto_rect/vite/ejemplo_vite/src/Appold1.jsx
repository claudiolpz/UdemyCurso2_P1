import Parser from "html-react-parser";

function App() {
  let ejemplo = `<h1> Clase azul </h1>`;
  let ejemplo2 = `<h1 className="clase_azul"> Clase azul </h1>`;
  return (
    <>
      <h1 className="clase_roja">Clase Roja</h1>
      {ejemplo}

      <div
        className="clase_azul"
        dangerouslySetInnerHTML={{ __html: ejemplo }}
      ></div>
      <hr />
      { Parser(ejemplo2) }
    </>
  );
}

export default App;
