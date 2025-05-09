import Frontend from "@/components/Frontend"

const contactanos = () => {
  return (
    <Frontend title={'Contactanos'}>
        <div className="container py-5">
            <h1>Contactanos</h1>
            <div className="card mb-4" id="forms">
                <div className="card-body">
                    <form>
                        <div className="row mb-3">
                            <label htmlFor="nombre" className="col-sm-2 col-form-label">
                                Nombre
                            </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="correo" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="telefono" className="col-sm-2 col-form-label">
                                Telefono
                            </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="mensaje" className="col-sm-2 col-form-label">
                                Mensaje
                            </label>
                            <textarea type="text" className="form-control"></textarea>
                        </div>
                        <button className="btn btn-primary" title="Enviar">
                            <i className="fas fa-envelope"></i> Enviar
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </Frontend>
  )
}

export default contactanos
