import React from 'react';
import ReactDOM from 'react-dom/client' 
import {createBrowserRouter, RouterProvider} from 'react-router'
import Frontend from './components/Frontend';
import Home from './pages/Home';
import IconPagina from './pages/IconPagina';
import ButtonPagina from './pages/ButtonPagina';
import TypographyPagina from './pages/TypographyPagina';
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