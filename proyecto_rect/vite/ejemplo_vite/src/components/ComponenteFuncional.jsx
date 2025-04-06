import ComponenteFuncional2 from "./ComponenteFuncional2";
import Numero from "./numero";
const ComponenteFuncional = () => {
  let nombre = "Claudio JIJIJAJA";
  let numero = 12;
  let paises = [
    {
      id: 1,
      nombre: "Argentina",
      capital: "Buenos Aires",
    },
    { 
        id: 2,
        nombre: "Chile", 
        capital: "Santiago" 
    },
    {
        id:3,
        nombre: "Peru",
        capital: "Lima" },
    {
        id: 4,
        nombre: "Colombia",
        capital: "Bogota"
    },
    {
        id: 5,
        nombre: "Uruguay",
        capital: "Montevideo"
    },
    {
        id: 6,
        nombre: "Paraguay",
        capital: "Asuncion"
    },
    {
        id: 7,
        nombre: "Venezuela", 
        capital: "Caracas" 
    },
    {
        id: 8,
        nombre: "Ecuador", 
        capital: "Quito" 
    },
    {
        id: 9,
        nombre: "Bolivia", 
        capital: "Sucre" 
    },
    {
        id: 10,
        nombre: "Brasil",
        capital: "Brasilia"
    },
  ];

  return (
    <div>
      <h1>desde componente funcional</h1>
      <ComponenteFuncional2 prop1="durazno" nombre={nombre} paises={paises}/>
      <hr />
      {(numero == 12) ? (
        <Numero numero={numero} />
      ): (
        <div>
          No es 12
        </div>
      )}
    </div>
  );
};

export default ComponenteFuncional;
