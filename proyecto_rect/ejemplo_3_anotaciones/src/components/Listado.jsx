import React from "react";

const Listado = () => {
  return (
    <div>
      <div className="list list-row-block">
        <div className="list-item" data-id="19">
          <div>
            <a href="#" data-abc="true">
              <span className="w-48 avatar gd-warning">S</span>
            </a>
          </div>
          <div className="flex">
            <a href="#" className="item-author text-color" data-abc="true">
              Sam Kuran
            </a>
            <div className="item-except text-muted text-sm h-1x">
              For what reason would it be advisable for me to think about
              business content?
            </div>
          </div>
          <div className="no-wrap">
            <div className="item-date text-muted text-sm d-none d-md-block">
              13/12 18
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado;
