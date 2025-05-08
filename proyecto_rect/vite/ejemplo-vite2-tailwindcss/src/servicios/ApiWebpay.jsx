export async function webpayCrearOrden(datos){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}webpay`, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
        'content-type': 'application/json',}
    })
    return respuesta.json()
}
export async function webpayRespuesta(datos){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}webpay-respuesta`, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
        'content-type': 'application/json',}
    })
    return respuesta.json()
}