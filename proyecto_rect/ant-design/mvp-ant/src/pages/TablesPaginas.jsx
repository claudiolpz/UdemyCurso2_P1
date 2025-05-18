import { Breadcrumb, Table } from 'antd'
import { Link } from 'react-router'

const TablesPaginas = () => {
    let columns =[
        {
            title:'Nombre',
            dataIndex:'nombre',
            key:'nombre',
            render:(fila)=>
            <>
            <u><strong>{fila}</strong></u>
            </>
        },
        {
            title:'Edad',
            dataIndex:'edad',
            key:'edad',
            render:((fila)=> (fila>24) ? <s>{fila}</s>:<i>{fila}</i>)
        },
        {
            title:'Genero',
            dataIndex:'genero',
            key:'genero'
        },
        {
            title:'Email',
            dataIndex:'correo',
            key:'correo'
        },
        {
            title:'Acciones',
            dataIndex:'acciones', //data index es el valor que queda asociado
            key:'acciones'
        },
        
    ]
    let data =[
        {
            key:'1',
            nombre:'Chester Cortes',
            edad:41,
            genero:"Masculino",
            correo:"chester@cortes.com"
        },
        {
            key:'2',
            nombre:'Manuel Vicu',
            edad:25,
            genero:"Masculino",
            correo:"manuel@vicu.com"
        },
        {
            key:'3',
            nombre:'Mathias Bernatene',
            edad:24,
            genero:"Masculino",
            correo:"Mathias@Bernatene.com"
        }
    ]
  return (
    <>
    <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Tables",
          },
        ]}
    />
    <h1>Table</h1>
    <Table columns={columns} dataSource={data}/>
    </>
  )
}

export default TablesPaginas
