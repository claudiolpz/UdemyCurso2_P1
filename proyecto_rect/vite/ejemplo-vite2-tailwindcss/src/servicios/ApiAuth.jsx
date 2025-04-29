import axios from 'axios';

let cabeceros = {
    "content-type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
};

export async function authRegistro(request) {
    let datos = axios.post(`${import.meta.env.VITE_API_URL}registro`, request, {
        headers:cabeceros,
    }).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.log(error);
    });
    return datos;
}

export async function authLogin(request) {
    let datos = axios.post(`${import.meta.env.VITE_API_URL}login`, request, {
        headers:cabeceros,
    }).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.log(error);
    });
    return datos;
}