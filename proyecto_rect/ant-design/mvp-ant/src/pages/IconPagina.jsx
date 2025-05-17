import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router'
import {PieChartOutlined, SkypeOutlined, AlipayOutlined, DeleteOutlined, Html5Outlined} from '@ant-design/icons'

const IconPagina = () => {
  return (
    <>
        <Breadcrumb items={[
            {
                title:<Link to='/'>Home</Link>
            },
            {
                title:"Icon"
            }
        ]}/>
        <h1>Icon</h1>
        <PieChartOutlined style={{fontSize:"90px", color:"red"}} spin={true}/>
        <hr />
        <SkypeOutlined style={{fontSize:"90px", color:"aqua"}} spin={true}/>
        <hr />
        <AlipayOutlined style={{fontSize:"90px", color:"aqua"}} spin={true}/>
        <hr />
        <DeleteOutlined style={{fontSize:"90px", color:"blue"}} rotate={180}/>
        <hr />
        <Html5Outlined style={{fontSize:"90px"}} twoToneColor={"orange"}/>
        <div></div>
    </>
  )
}

export default IconPagina
