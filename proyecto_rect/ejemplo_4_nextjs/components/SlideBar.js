import Link from "next/link"

const SlideBar = ({categorias}) => {
  return (
    <>
    <div></div>
    <div className="col-lg-3 order-2 order-lg-1">
            <h2 className="h3 mb-4 pb-1">Buscar por</h2>
           
              <div className="card border-0 shadow-sm mb-4 p-2">
                <div className="card-body"> 
                   <h2 className='Categoría'></h2>
                  {categorias.map((categoria)=>(
                    <ul key={categoria.id}>
                      <li>
                        <Link className={`text text-secondary`} href={`/categoria/${categoria.slug}`} title={categoria.nombre}>
                        {categoria.nombre}
                        </Link>
                      </li>
                    </ul>
                  ))}
                  
                  
                </div>
              </div>
             
              
           
          </div> 
    </>
  )
}

export default SlideBar
