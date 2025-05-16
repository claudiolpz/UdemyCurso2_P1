import React from 'react'

const Footer = () => {
  return (
    <>
        <footer style={{ background: '#111' }} >                
            <div className="copyrights py-4" >
                <div className="container">
                    <div className="row text-center gy-2">
                        <div className="col-sm-6 text-lg-start">
                            <p className="mb-0 text-muted mb-0 text-sm">&copy; Todos los derechos reservados.</p>
                        </div>
                        <div className="col-sm-6 text-md-end">
                            <p className="mb-0 text-muted mb-0 text-sm">Desarrollado por <a className="reset-anchor text-primary" href="https://github.com/claudiolpz/" target="_blank">Claudiolpz en un curso de Udemy</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div></div>
    </>
  )
}

export default Footer
