import { useRouter } from "next/router"
import Aviso from "@/components/Aviso"
import Frontend from "@/components/Frontend"
import SlideBar from "@/components/SlideBar"
import Link from "next/link"

const AvisosPorCategoria = () => {
    const router = useRouter();
  return (
    <>
    <Frontend title={'Avisos por categorías'}>
      <section className="py-5">
       <div className="container py-5">
         <div className="row gy-5">
           <SlideBar />
           <div className="col-lg-9 order-1 order-lg-2">
          <nav aria-label="breadcrumb">
                   <ol className="breadcrumb">
                     <li className="breadcrumb-item">
                       <Link href="/">Home</Link>
                     </li>
                     <li className="breadcrumb-item">
                       <Link href="/categorias">Categorías</Link>
                     </li>
                     <li className="breadcrumb-item active" aria-current="page">
                       Categorías: a
                     </li>
                   </ol>
                 </nav>
              <div className="row mb-4 align-items-center">
                   <div className="col-md-7"></div>
                   <div className="col-md-12 text-md-end">
                     <p className="h3 mb-0 p-3 p-md-0">
                       Se encontraron a registros para la categoría: 
                        a
                     </p>
                     <hr />
                   </div>
                 </div>
             <div className="row mb-4 gy-4">
               
              
             </div> 
            
           </div>
         </div>
       </div>
     </section>
    </Frontend>
    </>
  )
}

export default AvisosPorCategoria
