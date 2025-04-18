import { useState, createContext } from "react";

const EjemploContext = createContext();

const EjemploProvider = ({children})=>{
    const variableContexto = "hola Claudio desde el contexto";
    const saludar = (nombre)=>{
        return nombre;
    }
    const [stateContext, setStateContext] =useState("contenido inicial al state"); 
    return(
        <EjemploContext.Provider
        value={{
            variableContexto,
            saludar,
            stateContext,
            setStateContext
        }}
        >
            {children}
        </EjemploContext.Provider>
    )
}

export {
    EjemploProvider
}
export default EjemploContext