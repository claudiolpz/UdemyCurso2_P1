import React from "react";
import { Link, Outlet } from "react-router";
import { Layout, Menu } from "antd";

const Frontend = () => {
  const { Header, Content, Footer } = Layout;
  const items = [{ key: 1, label: <Link to="/">Home</Link> }];
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ flex: 1, minWidth: 0 }}
            items={items}
          ></Menu>
        </Header>
        <Content>
          <Outlet />
          <Footer style={{ textAlign: "center" }}>
            <hr />
            Todos los derechos reservados {new Date().getFullYear()}{" "}
            desarrollado por Claudio Lopez (Curso de Udemy)
          </Footer>
        </Content>
      </Layout>
      <div></div>
    </>
  );
};

export default Frontend;
