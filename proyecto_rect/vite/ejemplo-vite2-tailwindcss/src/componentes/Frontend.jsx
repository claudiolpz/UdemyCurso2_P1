import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
const Frontend = () => {
  return (
    <>
      <Header />
      <main className="main-content ">
      <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Frontend;
