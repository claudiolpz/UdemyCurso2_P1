import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

import '../public/css/output.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
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
import Formularios from './paginas/Formularios'
import FormularioSimple from './paginas/FormularioSimple'
import FormulariosUseActionData, {action as procesarFormularioActionDate} from './paginas/FormulariosUseActionData'
import FormulariosFormik from './paginas/FormulariosFormik'
import FormularioReactHookForm from './paginas/FormularioReactHookForm'
import FormularioReactFinalForm from './paginas/FormularioReactFinalForm'
import Utiles from './paginas/Utiles'
import UtiliesDayjs from './paginas/UtilesDayjs'
import Utilesmoment from './paginas/Utilesmoment'
import UtilesSpinner from './paginas/UtilesSpinner'
import UtilesSwipeable from './paginas/UtilesSwipeable'
import UtilesWebcam from './paginas/UtilesWebcam'
import UtilesGraficos from './paginas/UtilesGraficos'
import UtilesMapas1 from './paginas/UtilesMapas1'
import UtilesMapas2 from './paginas/UtilesMapas2'
import UtilesModal from './paginas/UtilesModal'
import UtilesCarrusel from './paginas/UtilesCarrusel'
import Material from './paginas/Material'
import MaterialBotones from './paginas/MaterialBotones'
import MaterialList from './paginas/MaterialList'
import MaterialDrawer from './paginas/MaterialDrawer'
import MaterialTable from './paginas/MaterialTable'
import MaterialAcordeon from './paginas/MaterialAcordeon'
import MaterialStepper from './paginas/MaterialStepper'
import MaterialTabs from './paginas/MaterialTabs'
import MaterialDialog from './paginas/MaterialDialog'
import MaterialCard from './paginas/MaterialCard'
import MaterialAutocomplete from './paginas/MaterialAutocomplete'
import MaterialDatePicker from './paginas/MaterialDatePicker'
import AlmacenamientoLocal from './paginas/AlmacenamientoLocal'
import AlmacenamientoLocalLocalStorage from './paginas/AlmacenamientoLocalLocalStorage'
import AlmacenamientoLocalSessionStorage from './paginas/AlmacenamientoLocalSessionStorage'
import ContexEjemplo from './paginas/ContexEjemplo'
import ReduxEjemplo from './paginas/ReduxEjemplo'
import AxiosComponent from './paginas/AxiosComponent'
import AxiosCategoria, {loader as listarCategorias} from './paginas/AxiosCategoria'
import AxiosCategoriasAdd, {action as addCategorias} from './paginas/AxiosCategoriasAdd'
import AxiosCategoriasEdit,{loader as editCategoriasLoader, action as editCategorias} from './paginas/AxiosCategoriasEdit'
import AxiosProductos, {loader as listarProductos} from './paginas/AxiosProductos'
import AxiosProductosCategoria, {loader as listarProductosCategorias} from './paginas/AxiosProductosCategoria'
import AxiosProductosAdd, {loader as listarCategoriasAddProductos, action as addProductos} from './paginas/AxiosProductosAdd'
import AxiosProductosEdit, {loader as listarCategoriasEditProductos, action as editProductos} from './paginas/AxiosProductosEdit'
import FetchComponent from './paginas/FetchComponent'
import FetchCategorias, {loader as listarCategoriasFetch} from './paginas/FetchCategorias'
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
        path: "/formularios",
        element: <Formularios/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/formulario-simple",
        element: <FormularioSimple/>,
        errorElement: <ErrorPersonalizado/>,
      },
      {
        path: "/formulario/useactiondata",
        element: <FormulariosUseActionData/>,
        action: procesarFormularioActionDate,
      },
      {
        path: "/formulario/formik",
        element: <FormulariosFormik/>,
      },
      {
        path: "/formulario/hookform",
        element: <FormularioReactHookForm/>,
      },
      {
        path: "/formulario/finalform",
        element: <FormularioReactFinalForm/>,
      },
      {
        path: "/utiles",
        element: <Utiles/>,
      },
      {
        path: "/utiles/dayjs",
        element: <UtiliesDayjs/>,
      },
      {
        path: "/utiles/moment",
        element: <Utilesmoment/>,
      },
      {
        path: "/utiles/spinner",
        element: <UtilesSpinner/>,
      },
      {
        path: "/utiles/swipeable",
        element: <UtilesSwipeable/>,
      },
      {
        path: "/utiles/webcam",
        element: <UtilesWebcam/>,
      },
      {
        path: "/utiles/graficos",
        element: <UtilesGraficos/>,
      },
      {
        path: "/utiles/mapas1",
        element: <UtilesMapas1/>,
      },
      {
        path: "/utiles/mapas2",
        element: <UtilesMapas2/>,
      },
      
      {
        path: "/utiles/modal",
        element: <UtilesModal/>,
      },
      {
        path: "/utiles/carrusel",
        element: <UtilesCarrusel/>,
      },
      {
        path: "/material",
        element: <Material/>,
      },
      {
        path: "/material/botones",
        element: <MaterialBotones/>,
      },
      {
        path: "/material/list",
        element: <MaterialList/>,
      },
      {
        path: "/material/drawer",
        element: <MaterialDrawer/>,
      },
      {
        path: "/material/table",
        element: <MaterialTable/>,
      },
      {
        path: "/material/acordion",
        element: <MaterialAcordeon/>,
      },
      {
        path: "/material/stepper",
        element: <MaterialStepper/>,
      },
      {
        path: "/material/tabs",
        element: <MaterialTabs/>,
      },
      {
        path: "/material/dialog",
        element: <MaterialDialog/>,
      },
      {
        path: "/material/card",
        element: <MaterialCard/>,
      },
      {
        path: "/material/autocomplete",
        element: <MaterialAutocomplete/>,
      },
      {
        path: "/material/datepicker",
        element: <MaterialDatePicker/>,
      },
      {
        path: "/localstorage",
        element: <AlmacenamientoLocal/>,
      },
      {
        path: "/localstorage/localstorage",
        element: <AlmacenamientoLocalLocalStorage/>,
      },
      {
        path: "/localstorage/sessionstorage",
        element: <AlmacenamientoLocalSessionStorage/>,
      },
      {
        path: "/context",
        element: <ContexEjemplo/>,
      },
      {
        path: "/redux",
        element: <ReduxEjemplo/>,
      },
      {
        path: "/axios",
        element: <AxiosComponent/>,
      },
      {
        path: "/axios/categorias",
        element: <AxiosCategoria/>,
        loader:listarCategorias
      },
      {
        path: "/axios/categorias/add",
        element: <AxiosCategoriasAdd/>,
        action:addCategorias
      },
      {
        path: "/axios/categorias/editar/:id",
        element: <AxiosCategoriasEdit/>,
        loader: editCategoriasLoader,
        action: editCategorias
      },
      {
        path: "/axios/productos/:page",
        element: <AxiosProductos/>,
        loader:listarProductos
  
      },
      {
        path: "/axios/productos/categorias/:slug/:page",
        element: <AxiosProductosCategoria/>,
        loader:listarProductosCategorias
  
      },
      {
        path: "/axios/productos/add",
        element: <AxiosProductosAdd/>,
        loader:listarCategoriasAddProductos,
        action:addProductos
  
      },
      {
        path: "/axios/productos/editar/:id",
        element: <AxiosProductosEdit/>,
        loader:listarCategoriasEditProductos,
        action:editProductos
  
      },
      {
        path: "/fetch",
        element: <FetchComponent/>,
      },
      {
        path: "/fetch/categorias",
        element: <FetchCategorias/>,
        loader:listarCategoriasFetch
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
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
