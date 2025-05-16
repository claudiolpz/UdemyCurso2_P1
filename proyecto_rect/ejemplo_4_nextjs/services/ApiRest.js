import axios from 'axios';

let cabeceros =
{
    'content-type': 'application/json' 
}
 let cabeceros_upload =
{
    'content-type': 'multipart/form-data' 
}

export async function getCategorias() {
  let datos = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-categorias`, {
      headers: cabeceros,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}

export async function getAvisos(page) {
  let datos = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos?page=${page}`,
      { headers: cabeceros }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function getAvisosPorId(id) {
  let datos = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos/${id}`, {
      headers: cabeceros,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}

export async function getAvisosPorCategoria(slug, page) {
  let datos = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-categoria/${slug}?page=${page}`,
      { headers: cabeceros }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function getCategoriasPorSlug(slug) {
  let datos = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-categorias/${slug}`,
      { headers: cabeceros }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function getAvisosComentariosPorId(id) {
  let datos = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-comentarios/${id}`,
      { headers: cabeceros }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}

export async function addAvisosComentariosPorId(request) {
  let datos = await axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-comentarios`,
      request,
      { headers: cabeceros }
    )
    .then((response) => {
      return response.status;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function formularioContacto(request) {
  let datos = await axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-contacto`,
      request,
      { headers: cabeceros }
    )
    .then((response) => {
      return response.status;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}

export async function getAvisosSearch(search) {
  let datos = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-search?search=${search}`,
      { headers: cabeceros }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function authLogin(request) {
  let datos = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}login`, request, {
      headers: cabeceros,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function authRegistro(request) {
  let datos = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}registro`, request, {
      headers: cabeceros,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function authMisDatos(request) {
  let datos = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}mis-datos`, request, {
      headers: cabeceros,
    })
    .then((response) => {
      return response.status;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function addCategorias(request) {
  let datos = await axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-categorias`,
      request,
      {
        headers: cabeceros,
      }
    )
    .then((response) => {
      return response.status;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function editCategorias(request, id) {
  let datos = await axios
    .put(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-categorias/${id}`,
      request,
      {
        headers: cabeceros,
      }
    )
    .then((response) => {
      return response.status;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}
export async function deleteCategorias(id) {
  let datos = await axios
    .delete(
      `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-categorias/${id}`,
      {
        headers: cabeceros,
      }
    )
    .then((response) => {
      console.log(response.status);
      return response.status;
    })
    .catch((err) => {
      console.log("error: " + err);
    });
  return datos;
}

export async function deleteAvisos(id) {
    console.log("gola")
    let datos = axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos/${id}`, {
            headers: cabeceros
        })
        .then((response) => {
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}
export async function editarAvisos(request, accionesId) {
    let formData = new FormData(); 
    formData.append('clasificados_categoria_id', request.clasificados_categoria_id);
    formData.append('nombre', request.nombre);
    formData.append('descripcion', request.descripcion);
    formData.append('imagen', request.foto); 
    formData.append('id', accionesId);
    let datos = axios
        .post(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-update`, formData, {
            headers: cabeceros_upload
        })
        .then((response) => {  
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}
export async function addAvisos(request) {
    try {
        const formData = new FormData(); 
        formData.append('clasificados_categoria_id', request.clasificados_categoria_id);
        formData.append('nombre', request.nombre);
        formData.append('descripcion', request.descripcion);
        
        // Validate file before append
        if (request.foto instanceof File) {
            formData.append('imagen', request.foto);
        } else {
            throw new Error('Invalid file format');
        }

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos`, 
            formData,
            {
                headers: cabeceros_upload
            }
        );

        return response.status;
    } catch (error) {
        // Log detailed error
        console.error('Upload error:', error.response?.data || error.message);
        throw error; // Re-throw to handle in component
    }
}