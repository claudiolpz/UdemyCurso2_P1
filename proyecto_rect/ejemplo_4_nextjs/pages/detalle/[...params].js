import Link from "next/link";
import Image from "next/image";
import Frontend from "@/components/Frontend";
import { useRouter } from "next/router";
import { getAvisosPorId, getCategorias } from "@/services/ApiRest";
const Detalle = ({ datos, categorias }) => {
  let router = useRouter();

  return (
    <div>
      <Frontend title={`${datos.nombre}`}>
        <section className="py-5">
          <div className="container py-5">
            <nav aria-label="breadcrmub">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href={`/categorias`}>Categorias</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {datos.nombre}
                </li>
              </ol>
            </nav>
            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm mb-4 mb-lg-5 p-2 p-lg-0">
                  <div className="card-body p-lg-5">
                    <p>
                      <Image
                        className="img-fluid"
                        src={`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}uploads/avisos/${datos.foto}`}
                        width={640}
                        height={280}
                        alt={datos.nombre}
                        unoptimized={true}
                        priority
                      />
                    </p>
                    <h2 className="h1 mb-4">{datos.nombre}</h2>
                    <h2 className="h4 mb-4">Categoría <Link href={`/categoria/${datos.clasificados_categoria_slug}`} title={datos.clasificados_categoria_nombre}>{datos.clasificados_categoria_nombre}</Link></h2>
                    <p>{datos.descripcion}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm mb-4 mb-lg-5 p-2 p-lg-0">
                  <div className="card-body p-4 p-lg-5">
                    <h2 className="h3 mb-4">Social links</h2>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a className="social-link facebook" href="#!">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link twitter" href="#!">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link vimeo" href="#!">
                          <i className="fab fa-vimeo"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link instagram" href="#!">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link youtube" href="#!">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm mb-4 mb-lg-5 p-2 p-lg-0">
                  <div className="card-body p-4 p-lg-5">
                  <h2 className="h3 mb-4">Categorias</h2>
                 <ul className="list-inline mb-0">
                      {categorias.map((categoria) => (
                        <li key={categoria.id} className="list-inline-item m-1">
                          <Link
                            className={`btn btn-${
                              datos.clasificados_categoria_id === categoria.id
                                ? "outline-danger"
                                : "light"
                            }`}
                            href={`/categoria/${categoria.slug}`}
                            title={categoria.nombre}
                          >
                            {categoria.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Frontend>
    </div>
  );
};

export default Detalle;

export async function getServerSideProps({ params }) {
  let categorias = await getCategorias();
  if (params) {
    let datos = await getAvisosPorId(params.params[0]);
    return {
      props: {
        datos,
        categorias,
      },
    };
  }
}
