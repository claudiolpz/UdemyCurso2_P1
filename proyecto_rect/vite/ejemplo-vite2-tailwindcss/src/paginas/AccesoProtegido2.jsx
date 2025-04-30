import {useContext, useEffect} from 'react'
import AuthContext from '../context/AuthProvider'

const AccesoProtegido2 = () => {
    const {handleEstaLogeado} = useContext(AuthContext)
    useEffect(() => {

        return()=>{
        handleEstaLogeado()
        }
    }, [])
  return (
    <div>
      <h1>Protegido 2</h1>
      <p>Hola {localStorage.getItem('tokenNombre')}</p>
    </div>
  )
}

export default AccesoProtegido2
