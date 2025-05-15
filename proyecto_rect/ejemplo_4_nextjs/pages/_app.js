import "@/styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import nookies, { setCookie, destroyCookie } from "nookies";
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [auth, setAuth]=useState(false)
  const [authNombre, setAuthNombre] = useState('')
  const [authCorreo, setAuthCorreo] = useState('')
  
const handleIniciarSesion=(token, nombre, correo)=>
  {
    setCookie(null, "tokenTamila", token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
    });
    setCookie(null, "tokenTamilaNombre", nombre, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
    setCookie(null, "tokenTamilaCorreo", correo, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        }); 
    setAuthNombre(nombre);
    setAuthCorreo(correo);
    setAuth(true);
  }
  return <Component {...pageProps}
  auth={auth}
  setAut={setAuth}
  authNombre={authNombre}
  authCorreo={authCorreo}
  setAuthNombre={setAuthNombre}
  setAuthCorreo={setAuthCorreo}
  handleIniciarSesion={handleIniciarSesion}
  />;
}
