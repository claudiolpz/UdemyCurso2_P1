import Frontend from "@/components/Frontend"
import { useState } from "react";
import { useRouter } from "next/router";
import { formularioContacto } from "@/services/ApiRest"
import Swal from "sweetalert2";

const Contactanos = () => {
    let router = useRouter();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [telefono, setTelefono] = useState('');
    const handleSubmit = async (e)=>{
    e.preventDefault();
    if(nombre == 0 || nombre ==""){
          Swal.fire({
            icon:"error",
            title:"Ups",
            text:"El campo esta vacio"
          });
          setNombre("");
          return;
        }
        if(correo == 0 || correo ==""){
          Swal.fire({
            icon:"error",
            title:"Ups",
            text:"El campo esta vacio"
          });
          setCorreo("");
          return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(correo)) {
          Swal.fire({
            icon: "error",
            title: "Ups",
            text: "El E-Mail ingresado no es válido",
          });
          setCorreo("");
          return;
        }
        if (mensaje == 0 || mensaje == "") {
          Swal.fire({
            icon: "error",
            title: "Ups",
            text: "El campo mensaje está vacío",
          });
          setMensaje("");
          return;
        }
        if (telefono == 0 || telefono == "") {
          Swal.fire({
            icon: "error",
            title: "Ups",
            text: "El campo mensaje está vacío",
          });
          setTelefono("");
          return;
        }
        if (!/^\+56\d{9}$/.test(telefono)) {
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "El número de teléfono debe comenzar con +56 y tener 9 dígitos",
            });
            setTelefono("");
            return;
        }
        if(await formularioContacto({nombre: nombre, correo:correo, telefono: telefono, mensaje:mensaje})){
           Swal.fire({
              icon: "success",
              title: "Ok",
              text: "Se envio el mensaje exitosamente",
            });
            setNombre("");
            setCorreo("");
            setMensaje("");
            setTelefono("")
            return router.push("/contactanos");
        }else{
          return Swal.fire({
            icon: "error",
            title: "Ups",
            text: "Ha ocurrido un error inesperado",
          });
        }
    }
  return (
    <Frontend title={'Contactanos'}>
        <div className="container py-5">
            <h1>Contactanos</h1>
            <div className="card mb-4" id="forms">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="nombre" className="col-sm-2 col-form-label">
                                Nombre
                            </label>
                            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" placeholder="Nombre"/>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="correo" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <input type="text" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="E-mail"/>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="telefono" className="col-sm-2 col-form-label">
                                Telefono
                            </label>
                            <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Telefono"/>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="mensaje" className="col-sm-2 col-form-label" >
                                Mensaje
                            </label>
                            <textarea type="text" className="form-control" id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Mensaje"></textarea>
                        </div>
                        <button className="btn btn-primary" title="Enviar">
                            <i className="fas fa-envelope"></i> Enviar
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </Frontend>
  )
}

export default Contactanos
