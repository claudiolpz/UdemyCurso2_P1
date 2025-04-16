const categorias = [
  { id: 1, nombre: "Frutas" },
  { id: 2, nombre: "Verduras" },
];

const productos = [
  { id: 1, categoria_id: 1, nombre: "Manzana", precio: 350 },
  { id: 2, categoria_id: 1, nombre: "Pera", precio: 400 },
  { id: 3, categoria_id: 1, nombre: "Banana", precio: 200 },
  { id: 4, categoria_id: 2, nombre: "Lechuga", precio: 100 },
  { id: 5, categoria_id: 2, nombre: "Zapallo", precio: 150 },
  { id: 6, categoria_id: 2, nombre: "Zanahoria", precio: 2180 },
  { id: 7, categoria_id: 2, nombre: "Repollo", precio: 120 },
  { id: 8, categoria_id: 1, nombre: "Limon", precio: 1090 },
  { id: 9, categoria_id: 1, nombre: "Naranja", precio: 500 },
  { id: 10, categoria_id: 1, nombre: "Kiwi", precio: 800 },
  { id: 11, categoria_id: 2, nombre: "Tomate", precio: 300 },
  { id: 12, categoria_id: 2, nombre: "Cebolla", precio: 400 },
];

const paises = [
  { id: 1, nombre: "Chile", dominio: "cl" },
  { id: 2, nombre: "Argentina", dominio: "ar" },
  { id: 3, nombre: "Colombia", dominio: "co" },
  { id: 4, nombre: "Perú", dominio: "pe" },
  { id: 5, nombre: "Brasil", dominio: "br" },
  { id: 6, nombre: "Uruguay", dominio: "uy" },
  { id: 7, nombre: "Paraguay", dominio: "py" },
  { id: 8, nombre: "Ecuador", dominio: "ec" },
  { id: 9, nombre: "Venezuela", dominio: "ve" },
  { id: 10, nombre: "Mexico", dominio: "mx" },
];

const categorias_productos = [
  {
    id: 1,
    nombre: "Abarrotes",
  },
  {
    id: 2,
    nombre: "Lácteos",
  },
  {
    id: 3,
    nombre: "Carnes",
  },
  {
    id: 4,
    nombre: "Licores",
  },
  {
    id: 5,
    nombre: "Perfumeria",
  },
];

const atributos = [
  {
    id: 1,
    nombre: "Perecible",
  },
  {
    id: 2,
    nombre: "Armable",
  },
  {
    id: 3,
    nombre: "Frágril",
  },
  {
    id: 4,
    nombre: "Multiuso",
  },
  {
    id: 5,
    nombre: "Edicion limitada",
  },
];

const imagenes = [{
  id:1,
  titulo:"ascenso",
  nombre:"https://static.emol.cl/emol50/Fotos/2022/11/01/file_20221101200426.jpg"
  },
  {
    id:2,
    titulo:"Maga Coquimbo",
    nombre:"https://static.emol.cl/emol50/Fotos/2023/12/09/file_20231209202413.jpg"
  },
  {
    id:3,
    titulo:"Maga Wanderers",
    nombre:"https://www.elagora.net/wp-content/uploads/2022/06/Magallanes.jpg"
  },
  {
    id:4,
    titulo:"Maga Celebracion",
    nombre:"https://static.emol.cl/emol50/Fotos/2022/05/08/file_20220508170325.jpg"
  },
  {
    id:5,
    titulo:"Maga Copa Chile",
    nombre:"https://www.lacuarta.com/resizer/v2/ACBYL4W4JFHU7BF7HP5XDPO7VE.jpg?quality=80&smart=true&auth=35db0f66ae35b8fc1d5372a8159b50a52b1b94394dda02bd7b5cedd455d95644&width=1023&height=682"
  }
  ]
export { productos };
export { categorias };
export { paises };
export { atributos };
export { categorias_productos };
export {imagenes};