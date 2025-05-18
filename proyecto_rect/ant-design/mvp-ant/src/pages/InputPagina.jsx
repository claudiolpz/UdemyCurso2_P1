import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Input, Select } from 'antd'
import { Link } from 'react-router'

const InputPagina = () => {
    const selectInitio = (
        <Select defaultValue='1'>
            <Select.Option value='1'>http://</Select.Option>
            <Select.Option value='2'>https://</Select.Option>
        </Select>
    );
    let eventoChange=(valor)=>{
        console.log("dato = "+ valor)
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
    <h1>Input</h1>
    <Input placeholder='default 32px'/>
    <hr />
    <Input placeholder='large' size='large'/>
    <hr />
    <Input placeholder='small' size='small'/>
    <hr />
    <Input placeholder='con icono' prefix={<UserOutlined/>}/>
    <hr />
    <Input.Password placeholder='contraseña'/>
    <hr />
    <Input placeholder='maximo 5 caracteres' maxLength={5}/>
    <hr />
    {/* select option multiple - SelectAnt estilo css custom */}
    <Select placeholder="seleccione un pais" defaultValue='0' className='SelectAnt'>
        <Select.Option value='0'>Seleccione ......</Select.Option>
        <Select.Option value='1'>Chile</Select.Option>
        <Select.Option value='2'>Argentina</Select.Option>
        <Select.Option value='3'>Brasil</Select.Option>
        <Select.Option value='4'>Uruguay</Select.Option>
    </Select>
    <hr />
    <Select placeholder="seleccione un pais" mode='multiple' className='SelectAnt'>
        <Select.Option value='0'>Seleccione ......</Select.Option>
        <Select.Option value='1'>Chile</Select.Option>
        <Select.Option value='2'>Argentina</Select.Option>
        <Select.Option value='3'>Brasil</Select.Option>
        <Select.Option value='4'>Uruguay</Select.Option>
    </Select>
    <hr />
    <Select placeholder="con buscador" showSearch={true} optionFilterProp='children' prefix={<SearchOutlined/>} className='SelectAnt'>
        <Select.Option value='0'>Seleccione ......</Select.Option>
        <Select.Option value='1'>Chile</Select.Option>
        <Select.Option value='2'>Argentina</Select.Option>
        <Select.Option value='3'>Brasil</Select.Option>
        <Select.Option value='4'>Uruguay</Select.Option>
    </Select>
    <hr />
    {/* addonBefore */}
    <Input placeholder='Mi Sitio Web' addonBefore={selectInitio}/>
    <hr />
    <Select placeholder="con eventos" className='SelectAnt' onChange={eventoChange}>
        <Select.Option value='0'>Seleccione ......</Select.Option>
        <Select.Option value='1'>Chile</Select.Option>
        <Select.Option value='2'>Argentina</Select.Option>
        <Select.Option value='3'>Brasil</Select.Option>
        <Select.Option value='4'>Uruguay</Select.Option>
    </Select>
    </>
  )
}

export default InputPagina
