import { Breadcrumb, Modal, Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router";

const ModalPagina = () => {
  const [modal, setModal] = useState(false);
  let abrirModal = (action) => {
    switch (action) {
      case true:
        setModal(true);
        break;
      case false:
        setModal(false);
        break;
    }
  };
  let accionModal=()=>{
    abrirModal(false)
    console.log("Enviar")
  }
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Modal",
          },
        ]}
      />
      <Button
        type="primary"
        onClick={() => {
          abrirModal(true);
        }}
      >
        Abrir Modal
      </Button>
      <Modal
        title="Titulo header"
        open={modal}
        onCancel={() => {
          abrirModal(false);
        }}
        centered={true}
        footer = {[
            <Button key={1} onClick={()=>{abrirModal(false)}} danger={true}> Cancelar Nuevo</Button>,
            <Button key={2} onClick={accionModal} type='primary'> Enviar</Button>
        ]}
      ></Modal>
    </>
  );
};

export default ModalPagina;
