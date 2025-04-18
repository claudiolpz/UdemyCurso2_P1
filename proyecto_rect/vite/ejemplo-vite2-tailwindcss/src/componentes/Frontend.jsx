import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { EjemploProvider } from "../context/EjemploProvider";
const Frontend = () => {
  return (
    <>
      <EjemploProvider>
      <Header />
      <main className="main-content ">
      <Outlet />
      </main>
      <Footer/>
      </EjemploProvider>
    </>
  );
};

export default Frontend;
