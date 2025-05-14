import "@/styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import nookies, {setCookies, destroyCookie} from 'nookies'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [auth, setAuth]=useState(false)
  const [authNombre,setAuthNombre] = ('')
  const [authCorreo,setAuthCorreo] = ('')
  
  return <Component {...pageProps}
  auth={auth}
  setAut={setAuth}
  authNombre={authNombre}
  authCorreo={authCorreo}
  setAuthNombre={setAuthNombre}
  setAuthCorreo={setAuthCorreo}
  />;
}
