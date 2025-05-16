import Frontend from "@/components/Frontend"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
const Pagina404 = ({authNombre, handleEstaLogueado, handleCerrarSesion})=> {
  useEffect(() => {
    handleEstaLogueado();
  }, []);
  return (
    <>
    <Frontend title={"Pagina no encontrada"} authNombre={authNombre} handleCerrarSesion={handleCerrarSesion}>
        <h1>Pagina no encontrada</h1>
        <hr />
        <center>
            <Image src='/images/ae86vsfd.jpg' width={350}
            height={467}/>
        </center>
    </Frontend>
    </>
  )
}

export default Pagina404
