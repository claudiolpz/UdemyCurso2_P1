import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../public/css/output.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Frontend from './componentes/Frontend';
import Index from './paginas/index'
import SobreNosotros from './paginas/SobreNosotros'
import Rutas from './paginas/Rutas'
import RutasPath from './paginas/RutasPath'
import RutasQueryString from './paginas/RutasQueryString'
import Error404 from './paginas/Error404'
import ErrorPersonalizado from './paginas/ErrorPersonalizado'
import Hooks from './paginas/Hooks'
import HooksEventoClick from './paginas/HooksEventoClick'
import HooksUseState from './paginas/HooksUseState'
import HooksEventoOnChange from './paginas/HooksEventoOnChange'
import HooksEventosVarios from './paginas/HooksEventosVarios'
import HooksUseEffect from './paginas/HookUseEffect'
import HooksCustom from './paginas/HooksCustom'
import HooksuseLoaderData, {loader as paisesLoader} from './paginas/HooksuseLoaderData'
import HooksUseNavegate from './paginas/HooksUseNavegate'
import HooksUseLocation from './paginas/HooksUseLocation'
import HooksUseRef from './paginas/HooksUseRef'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [
      {
        index: true,
        element: <Index />,
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
        path: "/hooks",
        element: <Hooks />,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/evento-click",
        element: <HooksEventoClick />,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/usestate",
        element: <HooksUseState/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/onchange",
        element: <HooksEventoOnChange/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/eventos-varios",
        element: <HooksEventosVarios/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/use-effect",
        element: <HooksUseEffect/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/custom-hooks",
        element: <HooksCustom/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/useloaderdata",
        element: <HooksuseLoaderData/>,
        errorElement: <ErrorPersonalizado/>,
        loader: paisesLoader
      },
      {
        path: "/hooks/usenavigate",
        element: <HooksUseNavegate/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/uselocation",
        element: <HooksUseLocation/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/hooks/useref",
        element: <HooksUseRef/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "*",
        element: <Error404 />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
