export const acortarTexto = (valor, desde, hasta) => {
  return valor.substring(desde, hasta);
};

export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }
    return fechaNueva.toLocaleDateString("es-ES", opciones);
}
