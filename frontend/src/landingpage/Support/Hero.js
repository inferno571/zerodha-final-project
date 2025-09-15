import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" style={{ background: "#387ed1", color: "white" }}>
      <div className="container">
        <div className="p-5">
          <h4>Support Portal</h4>
          <a href="#" className="text-white text-decoration-none">
            Track Tickets
          </a>
        </div>
        <div className="row p-5 m-3">
          <div className="col-md-7">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Eg. how do i activate F&O"
              />
              <span className="input-group-text">
                <i className="fa fa-search"></i>
              </span>
            </div>
            <div className="mt-3">
              <a href="#" className="text-white text-decoration-none me-3">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-none">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-md-5 ps-md-5">
            <h3 className="fs-4">Featured</h3>
            <ol className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  1. Rights Entitlements listing in June 2022
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  2. Issue with live feeds on NSE [Resolved]
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
