import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main3.jpg"
            alt="Card"
            style={{height:'550px'}}
          />
          <div className="card-img-overlay d-flex align-items-end">
            <div className="container">
              <h3 className="card-title fs-1 text fw-lighter">New Season Arrivals</h3>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
