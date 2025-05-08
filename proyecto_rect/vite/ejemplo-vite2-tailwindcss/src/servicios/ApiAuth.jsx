import axios from 'axios';

let cabeceros = {
    "content-type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
};
//cambiamos por api local import.meta.env.VITE_API_URL a import.meta.env.VITE_API_URL_LOCAL
export async function authRegistro(request) {
    let datos = axios.post(`${import.meta.env.VITE_API_URL_LOCAL}registro`, request, {
        headers:cabeceros,
    }).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.log(error);
    });
    return datos;
}

export async function authLogin(request) {
    let datos = axios.post(`${import.meta.env.VITE_API_URL_LOCAL}login`, request, {
        headers:cabeceros,
    }).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.log(error);
    });
    return datos;
}