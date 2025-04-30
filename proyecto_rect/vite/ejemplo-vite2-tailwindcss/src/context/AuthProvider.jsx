import { createContext, useState } from "react";
import Swal from "sweetalert2";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("tokenTamila") != null ? true : false
  );
  const handleEstaLogeado = () =>{
    if(!auth && localStorage.getItem("tokenTamila") == null){
      window.location='/acceso/login';
    }
    // setAuth(true);
  }
  const handleCerrarSesion = () => {
    Swal.fire({
      title: "¿Está seguro de cerrar sesión?",
      text:"podras volver a logearte cuando quieras",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("tokenTamila");
        localStorage.removeItem("tokenNombre");
        setAuth(false);
        window.location = "/acceso/login";
      } else if (result.isDenied) {
        Swal.fire("No se ha cerrado sesión", "", "info");
      }
    });
  }
  const handleIniciarSesion = (t, nombre) => {
    localStorage.setItem("tokenTamila", t);
    localStorage.setItem("tokenNombre", nombre);
    setAuth(true);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        handleIniciarSesion,handleEstaLogeado, handleCerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
