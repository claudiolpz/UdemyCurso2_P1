import { Breadcrumb, Button, message } from "antd";
import { Link } from "react-router";

const MessagePagina = () => {
    const mensajeGenerico = (tipo)=>{
        switch(tipo){
             case 'success':
                message.success("MENSAJE success", 5) //el 5 es la duracion en segundos
            break
            case 'error':
                message.error("MENSAJE Error", 5) //el 5 es la duracion en segundos
            break
            case 'warning':
                message.warning("MENSAJE Warning", 5) //el 5 es la duracion en segundos
            break
            case 'info':
                message.info("MENSAJE info", 5) //el 5 es la duracion en segundos
            break
            case 'loading':
                message.loading("MENSAJE loading", 5) //el 5 es la duracion en segundos
            break
        }
        
    }
  return (
    
    <>
     <Breadcrumb items={[
            {
                title:<Link to='/'>Home</Link>
            },
            {
                title:"Message"
            }
        ]}/>
    <h1>Message</h1>
    {/* <Button onClick={()=>{message.success("HOLA")}}>Mensaje Success</Button> */}
    <Button onClick={()=>{mensajeGenerico("success")}}>Mensaje Success</Button>

    <hr />
    <Button onClick={()=>{mensajeGenerico("error")}}>Mensaje Error</Button>
    <hr />
    <Button onClick={()=>{mensajeGenerico("warning")}}>Mensaje Warning</Button>
    <hr />
    <Button onClick={()=>{mensajeGenerico("info")}}>Mensaje info</Button>
    <hr />
    <Button onClick={()=>{mensajeGenerico("loading")}}>Mensaje loading</Button>

    <div></div>
    </>
  )
}

export default MessagePagina
