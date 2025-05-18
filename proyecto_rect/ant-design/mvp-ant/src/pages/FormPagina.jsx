import { Breadcrumb, Form, Button, Input, Checkbox } from 'antd'
import { createRef } from 'react'
import { Link } from 'react-router'

const FormPagina = () => {
    let handleSubmit = (datos) =>{
        console.log(`Email : ${datos.correo}`)
        console.log(`Contrasena : ${datos.password}`)
    }
    const formRef = createRef()
    const limpiar = ()=>{
        formRef.current.resetFields();
    }
  return (
    <>
    <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Input",
          },
        ]}
    />
    <Form 
    name="formulario"
    onFinish={handleSubmit}
    ref={formRef}
    >
        <Form.Item 
        label="Email"
        name="correo" 
        rules={[
            {
                required:true,
                message:"el campo Email es Obligatorio"
            },{
                type:'email',
                message:'Debe ingresar un correo valido'
            }
        ]}
        >
            <Input placeholder="E-Mail"/>
        </Form.Item>
        <Form.Item 
        label="Contraseña" 
        name="password" 
        rules={[
            {
                required:true,
                message:"el campo contrasena es Obligatorio"
            }
        ]}
        >
            <Input.Password placeholder="Contraseña"/>
        </Form.Item>
        <Form.Item label="Recordar" name="recordad" valuePropName='checked'>
            <Checkbox>Recordar Usuario</Checkbox>
        </Form.Item>
        <Form.Item >
            <Button htmlType='submit' type='primary' title="Iniciar Sesion">Iniciar Sesion</Button>
            &nbsp;&nbsp;&nbsp;
            <Button title="Limpiar" danger onClick={limpiar}>Limpiar</Button>
        </Form.Item>
    </Form>
    </>
  )
}

export default FormPagina
