export async function paypalCrearOrden(datos){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}paypal`,
    {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{'content-type':'application/json'}
    })
    return respuesta.json()
}

export async function paypalRespuesta(datos){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}paypal-capture`,
    {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{'content-type':'application/json'}
    })
    return respuesta.json()
}

export async function paypalCancelado(datos){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}paypal-cancelar`,
    {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{'content-type':'application/json'}
    })
    return respuesta.json()
}

