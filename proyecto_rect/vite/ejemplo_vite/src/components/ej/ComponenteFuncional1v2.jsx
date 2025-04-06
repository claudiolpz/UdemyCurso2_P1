import ComponenteFuncional2v2 from "./ComponenteFuncional2v2";

const ComponenteFuncional1v2 = () => {
  let magallanes = [
    {
        id: 1,
        dorsal: "12",
        pais: "Uruguay",
        nombre: "Matias Bernatene",
      },
      {
        id: 2,
        dorsal: "14",
        pais: "Argentina",
        nombre: "Bruno Valdez",
      },
      {
        id: 3,
        dorsal: "6",
        pais: "Chile",
        nombre: "Gino Alucema",
      },
      {
        id: 4,
        dorsal: "3",
        pais: "Chile",
        nombre: "Alonso Walters",
      },
      {
        id: 5,
        dorsal: "16",
        pais: "Chile",
        nombre: "Matias Osorio",
      },
      {
        id: 6,
        dorsal: "18",
        pais: "Chile",
        nombre: "Alessandro Toledo",
      },
      {
        id: 7,
        dorsal: "21",
        pais: "Chile",
        nombre: "Javier Quiroz",
      },
      {
        id: 8,
        dorsal: "10",
        pais: "Chile",
        nombre: "Tomas Aranguiz",
      },
      {
        id: 9,
        dorsal: "8",
        pais: "Chile",
        nombre: "Manuel Vicuña",
      },
      {
        id: 10,
        dorsal: "7",
        pais: "Chile",
        nombre: "Gaston Lezcano",
      },
      {
        id: 11,
        dorsal: "26",
        pais: "Chile",
        nombre: "Carlitos Muñoz",
      },
  ];

  return (
    <div>
      <h1>desde componente funcional</h1>
      <ComponenteFuncional2v2 jugadores={magallanes}/>
    </div>
  );
};

export default ComponenteFuncional1v2;
