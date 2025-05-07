import axios from 'axios';

let bearer='';

if(localStorage.getItem('tokenTamilaAnotacion')!=null){
    bearer=localStorage.getItem('tokenTamilaAnotacion');
}else{
    let datos = authLogin({correo: import.meta.env.VITE_API_CORREO, password: import.meta.env.VITE_API_PASSWORD});
    bearer=localStorage.getItem('tokenTamilaAnotacion');
}
let cabeceros = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + bearer
}
export async function authLogin(request){
    let datos = axios.post(`${import.meta.env.VITE_API_URL_LOCAL}login`, request, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        localStorage.setItem('tokenTamilaAnotacion', response.data.token);
        return;
    }).catch((error) => {
        return {"estado": "error"}
    })
    return datos;
}
export async function getAnotaciones(){
    let datos = axios.get(`${import.meta.env.VITE_API_URL_LOCAL}anotaciones`, {
        headers: cabeceros
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return {"estado": "error"}
    })
    return datos;
}