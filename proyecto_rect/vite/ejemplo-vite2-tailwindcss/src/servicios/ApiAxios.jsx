import axios from "axios";

let cabeceros = {
  "content-type": "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
};
let cabeceros_updload = {
  "content-type": "multipart/form-data",
  Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
};

export async function getCategorias() {
  let datos = axios
    .get(`${import.meta.env.VITE_API_URL_LOCAL}categorias`, {
      headers: cabeceros,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("Comunicacion Fallida");
      }
    })
    .catch((err) => {
      console.log("Comunicacion Fallida");
    });
    return datos;
}

export async function addCategorias(request) {
  let datos = axios.post(`${import.meta.env.VITE_API_URL_LOCAL}categorias`,
    request, {
      headers: cabeceros
    }
  ).then((response)=>{
    return response.status
  }).catch((error)=>{
    console.log(error)
  })
  return datos;
}

export async function getCategoriasPorId(id) {
  let datos = axios
    .get(`${import.meta.env.VITE_API_URL_LOCAL}categorias/${id}`, {
      headers: cabeceros,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("Comunicacion Fallida");
      }
    })
    .catch((err) => {
      console.log("Comunicacion Fallida");
    });
    return datos;
}

export async function editCategorias(request, id) {
  let datos = axios.put(`${import.meta.env.VITE_API_URL_LOCAL}categorias/${id}`,
    request, {
      headers: cabeceros
    }
  ).then((response)=>{
    return response.status
  }).catch((error)=>{
    console.log(error)
  })
  return datos;
}
export async function deleteCategorias(id) {
  let datos = axios.delete(`${import.meta.env.VITE_API_URL_LOCAL}categorias/${id}`,
    {
      headers: cabeceros
    }
  ).then((response)=>{
    return response.status
  }).catch((error)=>{
    console.log(error)
  })
  return datos;
}

export async function getProductos(page) {
  let datos = axios
    .get(`${import.meta.env.VITE_API_URL_LOCAL}productos?page=${page}`, {
      headers: cabeceros,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("Comunicacion Fallida");
      }
    })
    .catch((err) => {
      console.log("Comunicacion Fallida");
    });
    return datos;
}
export async function getCategoriasPorSlug(slug) {
  let datos = axios
    .get(`${import.meta.env.VITE_API_URL_LOCAL}categorias-slug/${slug}`, {
      headers: cabeceros,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("Comunicacion Fallida");
      }
    })
    .catch((err) => {
      console.log("Comunicacion Fallida");
    });
    return datos;
}
export async function getProductosPorCategorias(slug,page) {
  let datos = axios
    .get(`${import.meta.env.VITE_API_URL_LOCAL}productos-buscar/${slug}?page=${page}`, {
      headers: cabeceros,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("Comunicacion Fallida");
      }
    })
    .catch((err) => {
      console.log("Comunicacion Fallida");
    });
    return datos;
}
export async function addProductos(request) {
   let datos = axios.post(`${import.meta.env.VITE_API_URL_LOCAL}productos`, request, {
      headers: cabeceros
    }).then((response) => {
      return response.status;
    }).catch((error) => {
      console.log(error);
    });
  return datos;
}
export async function getProductosPorId(id) {
  let datos = axios
    .get(`${import.meta.env.VITE_API_URL_LOCAL}productos/${id}`, {
      headers: cabeceros,
    })
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("Comunicacion Fallida");
      }
    })
    .catch((err) => {
      console.log("Comunicacion Fallida");
    });
    return datos;
}
export async function editProductos(request, id) {
  let datos = axios.put(`${import.meta.env.VITE_API_URL_LOCAL}productos/${id}`,
    request, {
      headers: cabeceros
    }
  ).then((response)=>{
    return response.status
  }).catch((error)=>{
    console.log(error)
  })
  return datos;
}
export async function deleteProductos(id) {
  let datos = axios.delete(`${import.meta.env.VITE_API_URL_LOCAL}productos/${id}`, {
     headers: cabeceros
   }).then((response) => {
     return response.status;
   }).catch((error) => {
     console.log(error);
   });
 return datos;
}