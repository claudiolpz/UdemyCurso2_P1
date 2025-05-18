import { Breadcrumb, Form, Button, Input, Checkbox } from 'antd'
import { Link } from 'react-router'

const FormPagina = () => {
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
    <Form>
        <Form.Item label="Email" name="correo" >
            <Input placeholder="E-Mail"/>
        </Form.Item>
        <Form.Item label="Contraseña" name="password" >
            <Input placeholder="Contraseña"/>
        </Form.Item>
        <Form.Item label="Recordar" name="recordad" valuePropName='checked'>
            <Checkbox>Recordar Usuario</Checkbox>
        </Form.Item>
        <Form.Item >
            <Button htmlType='submit' type='primary' title="Iniciar Sesion">Iniciar Sesion</Button>
            &nbsp;&nbsp;&nbsp;
            <Button title="Limpiar">Limpiar</Button>
        </Form.Item>
    </Form>
    </>
  )
}

export default FormPagina
