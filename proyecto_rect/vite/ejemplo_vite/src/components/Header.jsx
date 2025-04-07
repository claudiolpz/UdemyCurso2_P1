import { Link  } from "react-router-dom";

const Header = () => {
  return (
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link className="link-secondary" to="/">
                Subscribe
              </Link>
            </div>
            <div className="col-4 text-center">
              <Link
                className="blog-header-logo text-body-emphasis text-decoration-none"
                to="/"
              >
                <img src="/images/logo.png" />
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <Link className="link-secondary" to="/" aria-label="Search"></Link>
              <Link className="btn btn-sm btn-outline-secondary" to="/">
                Sign up
              </Link>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            <Link className="nav-item nav-link link-body-emphasis active" to="/" title="Home">
              Home
            </Link>
            <Link className="nav-item nav-link link-body-emphasis active" to="/rutas" title="Rutas">
              Rutas
            </Link>
            <Link className="nav-item nav-link link-body-emphasis active" to="/basicos" title="Basicos">
              Basicos
            </Link>
            <Link className="nav-item nav-link link-body-emphasis active" to="/formularios" title="Formularios">
              Formularios
            </Link>
          </nav>
        </div>
      </div>
  );
};

export default Header;
