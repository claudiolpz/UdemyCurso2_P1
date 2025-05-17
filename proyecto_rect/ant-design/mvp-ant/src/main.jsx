import React from 'react';
import ReactDOM from 'react-dom/client' 
import {createBrowserRouter, RouterProvider} from 'react-router'
import Frontend from './components/Frontend';
import Home from './pages/Home';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Frontend/>,
      children:[
        {
          index:true,
          element:<Home/>
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