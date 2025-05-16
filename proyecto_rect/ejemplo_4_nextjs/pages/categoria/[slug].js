import { useRouter } from "next/router"
import { useEffect } from "react"
import Aviso from "@/components/Aviso"
import Frontend from "@/components/Frontend"
import SlideBar from "@/components/SlideBar"
import Link from "next/link"
import { getCategorias, getCategoriasPorSlug,getAvisosPorCategoria } from "@/services/ApiRest"

const AvisosPorCategoria = ({categorias, avisos, cat, page, authNombre, handleEstaLogueado, handleCerrarSesion})=> {
  useEffect(() => {
    handleEstaLogueado();
  }, []);
  const router = useRouter();
  let siguiente;
  let anterior;
  let pageMenos1 = parseInt(page) - 1;
  let pageMas1 = parseInt(page) + 1;
  if(parseInt(pageMenos1) <= 1){
    anterior = 1;
  }else{
    anterior = pageMenos1;
  }
  if(parseInt(pageMas1) >=avisos.links){
    siguiente = avisos.links;
  }else{
    siguiente = pageMas1;
  }
  if(siguiente == 0){
    siguiente=1;
  }
  let paginas = []
  for (let i = 1; i<= avisos.links; i++){
    paginas[i]=i;
  }
  return (
    <>
    <Frontend title={'Categorías'} authNombre={authNombre} handleCerrarSesion={handleCerrarSesion}>
     <section className="py-5">
      <div className="container py-5">
        <div className="row gy-5">
            <SlideBar valor={cat.id} categorias={categorias}/>
          <div className="col-lg-9 order-1 order-lg-2">
         <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                     <Link href="/categorias?page=1">Categorías</Link> 
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Categorías: {cat.nombre}
                    </li>
                  </ol>
                </nav>
             <div className="row mb-4 align-items-center">
              <div className="col-md-7"></div>
                <div className=" col-md-12 text-md-end" >
                <p className="h3 mb-0 p-3 p-md-0">
                  Se encontraron {avisos.total} registros por la coategoria {" "} {cat.nombre}
                </p>
                <hr />
              </div>
             </div>
            <div className="row mb-4 gy-4">
              {avisos.datos.map((aviso)=>(
                <Aviso key={aviso.id} aviso={aviso}/>
              ))}
             
            </div> 
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end mb-0">
                 <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href={`/categoria/${cat.slug}?page=1`}
                        aria-label="Primera"
                        title="Primera"
                      >
                        <span aria-hidden="true">«««</span>
                      </Link>
                </li>
                <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href={`/categoria/${cat.slug}?page=${anterior}`}
                        aria-label="Anterior"
                        title="Anterior"
                      >
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    {/*paginación numérica */}
                    {[...paginas].map((x,i)=>(
                      <li className="page-item mx-l" key={i}>
                        {i >= 1 && (
                          <Link className="page-link rounded shadow-sm px-3" href={`/categorias?page=${i}`}>
                          {i}
                          </Link>
                        )

                        }

                      </li>
                    ))}
                    {/*//paginación numérica */}
                <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href={`/categoria/${cat.slug}?page=${siguiente}`}
                        aria-label="Siguiente"
                        title="Siguiente"
                      >
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                    <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href={`/categoria/${cat.slug}?page=${(avisos.links)==0? `1` : avisos.links}`}
                        aria-label="Última"
                        title="Última"
                      >
                        <span aria-hidden="true">»»»</span>
                      </Link>
                    </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
   </Frontend>
   <div></div>
    </>
  )
}

export default AvisosPorCategoria


export async function getServerSideProps({query, params}){
  let page = query.page;
  if(params)
  {
    let categorias = await getCategorias();
    let avisos = await getAvisosPorCategoria(params.slug,page)
    let cat = await getCategoriasPorSlug(params.slug)
  
  return {
    props:{
      categorias, avisos, cat, page
    }
  }
  }
}
