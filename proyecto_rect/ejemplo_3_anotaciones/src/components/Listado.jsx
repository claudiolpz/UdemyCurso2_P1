import { Fragment } from "react";

const Listado = ({ datos }) => {
  return (
    <div>
      <div className="list list-row-block">
        {datos.map((dato) => (
          <Fragment key={dato.id}>
            <div className="list-item" data-id="19">
              <div>
                <span data-abc="true">
                  <span className="w-48 avatar gd-warning">S</span>
                </span>
              </div>
              <div className="flex">
                <span className="item-author text-color" data-abc="true">
                  {dato.titulo}
                </span>
                <div
                  className="item-except text-muted text-sm h-1x"
                  dangerouslySetInnerHTML={{ __html: dato.descripcion }}
                ></div>
              </div>
              <div className="no-wrap">
                <div className="item-date text-muted text-sm d-none d-md-block">
                  {dato.fecha}
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Listado;
