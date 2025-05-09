import Frontend from "@/components/Frontend"
import Link from "next/link"
import SlideBar from "@/components/SlideBar"
import Aviso from "@/components/Aviso"

const Categorias = () => {
  return (
    <div>
      <Frontend title={'Categorías'}>
     <section className="py-5">
      <div className="container py-5">
        <div className="row gy-5">
            <SlideBar/>
          <div className="col-lg-9 order-1 order-lg-2">
         <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Categorías
                    </li>
                  </ol>
                </nav>
             
            <div className="row mb-4 gy-4">
             <Aviso/>
            </div> 
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end mb-0">
                 <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href="/categorias?page=1"
                        aria-label="Primera"
                        title="Primera"
                      >
                        <span aria-hidden="true">«««</span>
                      </Link>
                </li>
                <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href="#"
                        aria-label="Anterior"
                        title="Anterior"
                      >
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    {/*paginación numérica */}
                    {/*//paginación numérica */}
                <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href="#"
                        aria-label="Siguiente"
                        title="Siguiente"
                      >
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                    <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href="#"
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
    </div>
  )
}

export default Categorias
