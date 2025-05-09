import Link from 'next/link'
const Aviso = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 hover-transition">
          {/* <Link
            className="d-block dark-overlay card-img-top overflow-hidden tool-trending"
            // href={`/detalle/${aviso.id}/${aviso.slug}`}
          > */}
            <div className="overlay-content">
              {/* <Image
                className="img-fluid"
                loader={()=>`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}uploads/avisos/${aviso.foto}`}
                src={`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}uploads/avisos/${aviso.foto}`}
                width={640}
                height={280}
                alt="Clasificados Nextjs" 
                unoptimized={true} priority
                
              /> */}
            </div>
          {/* </Link> */}
          <div className="card-body p-4">
            <h3 className="h5">
              {/* {" "}
              <Link className="stretched-link reset-anchor" href={`/detalle/${aviso.id}/${aviso.slug}`} title={aviso.nombre}>
                {aviso.nombre}
              </Link> */}
            </h3>
            <p className="text-muted text-sm mb-0">
              {/* {acortarTexto(aviso.descripcion, 0, 100)}.... */}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aviso
