import { createContext, useState } from "react";


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
  const handleIniciarSesion = (t, nombre) => {
    localStorage.setItem("tokenTamila", t);
    localStorage.setItem("tokenNombre", nombre);
    setAuth(true);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        handleIniciarSesion,handleEstaLogeado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
