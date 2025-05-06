import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'
import App, {loader as appLoader} from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      loader: appLoader,
      children:[

      ] 
    }
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
