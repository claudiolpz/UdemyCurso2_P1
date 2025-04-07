import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./paginas/Home";
import SobreNosotros from "./paginas/SobreNosotros";
import Error404 from "./paginas/Error404";
import Rutas from "./paginas/Rutas";
import RutasPath from "./paginas/RutasPath";
import RutasQueryString from "./paginas/RutasQueryString";
import ErrorPersonalizado from "./paginas/ErrorPersonalizado";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sobre-nosotros",
        element: <SobreNosotros />,
      },
      {
        path: "/rutas",
        element: <Rutas />,
      },
      {
        path: "/rutas/path/:id/:slug",
        element: <RutasPath />,
      },
      {
        path: "/rutas/query-string",
        element: <RutasQueryString />,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "*",
        element: <Error404 />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
