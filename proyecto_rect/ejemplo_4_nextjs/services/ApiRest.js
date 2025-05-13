import axios from "axios";

let cabeceros = {
    'content-type': 'application/json'
}

let cabeceros_upload = {
    'content-type': 'multipart/form-data'
}

export async function getCategorias() {

    let datos = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-categorias`, {headers:cabeceros

    }).then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log("error: "+err)
    })
    return datos
}

export async function getAvisos(page) {

    let datos = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos?page=${page}`, {headers:cabeceros

    }).then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log("error: "+err)
    })
    return datos
}
export async function getAvisosPorId(id) {

    let datos = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos/${id}`, {headers:cabeceros

    }).then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log("error: "+err)
    })
    return datos
}

export async function getAvisosPorCategoria(slug,page) {

    let datos = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-categoria/${slug}?page=${page}`, {headers:cabeceros

    }).then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log("error: "+err)
    })
    return datos
}
export async function getCategoriasPorSlug(slug) {

    let datos = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-categorias/${slug}`, {headers:cabeceros

    }).then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log("error: "+err)
    })
    return datos
}
export async function getAvisosComentariosPorId(id) {

    let datos = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-comentarios/${id}`, {headers:cabeceros

    }).then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log("error: "+err)
    })
    return datos
}

export async function addAvisosComentariosPorId(request) {

    let datos = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-comentarios`, request, {headers:cabeceros

    }).then((response)=>{
        return response.status
    })
    .catch((err)=>{
        console.log("error: "+err)
    })
    return datos
}
