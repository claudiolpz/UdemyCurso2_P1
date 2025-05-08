import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
// import { EjemploProvider } from "../context/EjemploProvider";
import { AuthProvider } from "../context/AuthProvider";
const Frontend = () => {
  return (
    <>
      <AuthProvider>
      <Header />
      <main className="main-content ">
      <Outlet />
      </main>
      <Footer/>
      </AuthProvider>
    </>
  );
};

export default Frontend;
