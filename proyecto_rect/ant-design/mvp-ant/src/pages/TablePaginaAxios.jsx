import { Breadcrumb, Table } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
const TablePaginaAxios = () => {
    const [data, setData] = useState()
    let traerDatos= async ()=>{
        await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        });
    };
    useEffect(()=>{
        traerDatos()    
    },[])
    let columns =[
        {
            title:'id',
            dataIndex:"id",
            key:"id"
        },
        {
            title:'userId',
            dataIndex:"userId",
            key:"userId"
        },
        {
            title:'title',
            dataIndex:"title",
            key:"title"
        },
        {
            title:'body',
            dataIndex:"body",
            key:"body"
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
            title: "Tables-Axios",
          },
        ]}
    />
    <Table columns={columns} dataSource={data} rowKey='id'/>
    </>
  )
}

export default TablePaginaAxios
