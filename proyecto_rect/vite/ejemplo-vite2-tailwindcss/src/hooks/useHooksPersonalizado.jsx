import { useState } from "react"


const useHooksPersonalizado = () => {
    const [vegetales, setVegetales] = useState([]);
    //tambien se pueden retornar otros hooks personalizados const [ejemplo, setEjemplo] = useState([]);     return [verduras, setVerdurasm ejemplo, setEjemplo]
    return [vegetales, setVegetales]
}

export default useHooksPersonalizado
