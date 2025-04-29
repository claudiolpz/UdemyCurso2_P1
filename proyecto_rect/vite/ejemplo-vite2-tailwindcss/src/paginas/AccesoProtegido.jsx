import {useContext, useEffect} from 'react'
import AuthContext from '../context/AuthProvider'

const AccesoProtegido = () => {
    const {handleEstaLogeado} = useContext(AuthContext)
    useEffect(() => {

        return()=>{
        handleEstaLogeado()
        }
    }, [])
  return (
    <div>
      <h1>Protegido</h1>
    </div>
  )
}

export default AccesoProtegido
