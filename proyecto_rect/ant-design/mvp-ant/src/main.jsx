import React from 'react';
import ReactDOM from 'react-dom/client' 
import {createBrowserRouter, RouterProvider} from 'react-router'
import '/public/css/estilos.css'
import Frontend from './components/Frontend';
import Home from './pages/Home';
import IconPagina from './pages/IconPagina';
import ButtonPagina from './pages/ButtonPagina';
import TypographyPagina from './pages/TypographyPagina';
import MessagePagina from './pages/MessagePagina';
import CarouselPagina from './pages/CarouselPagina';
import ModalPagina from './pages/ModalPagina';
import GridPagina from './pages/GridPagina';
import InputPagina from './pages/InputPagina';
import FormPagina from './pages/FormPagina';
import TablesPaginas from './pages/TablesPaginas';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Frontend/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/icon",
          element:<IconPagina/>
        },
        {
          path:"/button",
          element:<ButtonPagina/>
        },
        {
          path:"/typography",
          element:<TypographyPagina/>
        },
        {
          path:"/message",
          element:<MessagePagina/>
        },
        {
          path:"/carousel",
          element:<CarouselPagina/>
        },
        {
          path:"/modal",
          element:<ModalPagina/>
        },
        {
          path:"/grid",
          element:<GridPagina/>
        },
        {
          path:"/input",
          element:<InputPagina/>
        },
        {
          path:"/form",
          element:<FormPagina/>
        },
        {
          path:"/tables",
          element:<TablesPaginas/>
        }
      ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);