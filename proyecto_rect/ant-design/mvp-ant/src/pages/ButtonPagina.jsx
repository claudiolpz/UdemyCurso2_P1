import { SearchOutlined } from '@ant-design/icons'
import { Breadcrumb, Button } from 'antd'
import { Link } from 'react-router'
const ButtonPagina = () => {
  return (
    <>
    <Breadcrumb items={[
            {
                title:<Link to='/'>Home</Link>
            },
            {
                title:"Button"
            }
        ]}/>
        <h1>Button</h1>
        <h2>Tipos de botones</h2>
        <Button type="primary" size="large">Boton primary</Button>
        <hr />
        <Button type="dashed">Boton Dashed</Button>
        <hr />
        <Button type="link" href="https://github.com/claudiolpz/" target='_blank'>Boton Link</Button>
        <hr />
        <Button type="ghost">Boton Ghost</Button>
        <hr />
        <Button type="text">Boton Text</Button>
        <hr />
        <Button disabled={true}>Boton Disabled</Button>
        <hr />
        <Button type="primary" icon={<SearchOutlined/>}>Boton Icon</Button>
        <hr />
        <Button danger>Boton Danger</Button>
        <hr />
        <Button onClick={()=>{alert("Hola")}}>Haz Click</Button>
        <hr />
        <Button loading={true}>Loading</Button>
        
        
    </>
  )
}

export default ButtonPagina
