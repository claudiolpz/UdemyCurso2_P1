let cabeceros = {
  "content-type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
};
let cabeceros_updload = {
  "content-type": "multipart/form-data",
  Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
};

export async function getCategorias() {
  let respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias`, {
    headers: cabeceros,
  });
  const resultado = await respuesta.json();
  return resultado;
}

export async function addCategorias(datos) {
    let respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: cabeceros
    });
    return await respuesta.json();
  }
  export async function editCategorias(datos, id) {
    let respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: cabeceros
      })
      await respuesta.json()
  }
  export async function deleteCategorias(datos, id) {
    let respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify(datos),
        headers: cabeceros
      })
      await respuesta.json()
  }