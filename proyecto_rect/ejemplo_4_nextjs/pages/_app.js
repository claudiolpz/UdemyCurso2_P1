import "@/styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import nookies, { setCookie, destroyCookie } from "nookies";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [authNombre, setAuthNombre] = useState("");
  const [authCorreo, setAuthCorreo] = useState("");

  const handleEstaLogueado=() => {
    let cookies = nookies.get(null);
    if(Object.keys(cookies).length==0){
      router.push("/login")
    }
    setAuth(true);
    setAuthNombre(cookies.tokenTamilaNombre)
    setAuthCorreo(cookies.tokenTamilaCorreo)
  }

  const handleIniciarSesion = (token, nombre, correo) => {
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
  };

  const handleCerrarSesion = () => {

    Swal.fire({
      title: '¿Realmente desea cerrar la sesión?',
      text: "Podrás volver a loguearte cuando lo necesites!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'NO',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        
        destroyCookie(null, 'tokenTamila', {});
        destroyCookie(null, 'tokenTamilaNombre', {});
        destroyCookie(null, 'tokenTamilaCorreo', {});
       
        setAuthNombre('');
        setAuthCorreo('');
        setAuth(false);
        router.push("/login");
      }
    })

  };

  return (
    <Component
      {...pageProps}
      auth={auth}
      setAut={setAuth}
      authNombre={authNombre}
      authCorreo={authCorreo}
      setAuthNombre={setAuthNombre}
      setAuthCorreo={setAuthCorreo}
      handleIniciarSesion={handleIniciarSesion}
      handleEstaLogueado={handleEstaLogueado}
      handleCerrarSesion={handleCerrarSesion}
    />
  );
}
