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

export { productos };
export { categorias };
export { paises }
