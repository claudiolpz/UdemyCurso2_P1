import { Breadcrumb, Row, Col, Divider } from "antd"
import { Link } from "react-router"

const GridPagina = () => {
  return (
    <>
    <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Grid",
          },
        ]}
      />
    <Divider>1 Columna (24)</Divider>
    <Row>
        <Col span={24} style={{backgroundColor:'green', color:'white'}}>
        <div>Columna</div></Col>
    </Row>
    <Divider>2 filas (12 c/u)</Divider>
    <Row gutter={[8,8]}>
        <Col span={12} style={{backgroundColor:'green', color:'white'}}>
            <div>Columna 1</div>
        </Col>
        <Col span={12} style={{backgroundColor:'red', color:'white'}}>
            <div>Columna 2</div>
        </Col>
    </Row>
    <Divider>3 filas (8 c/u)</Divider>
    <Row gutter={[16,16]}>
        <Col span={8} style={{backgroundColor:'green', color:'white'}}>
            <div>Columna 1</div>
        </Col>
        <Col span={8} style={{backgroundColor:'red', color:'white'}}>
            <div>Columna 2</div>
        </Col>
        <Col span={8} style={{backgroundColor:'blue', color:'white'}}>
            <div>Columna 3</div>
        </Col>
    </Row>
    </>
  )
}

export default GridPagina
