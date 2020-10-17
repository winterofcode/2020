import React from "react";
import "./LandingPage.scss";

export default () => {
  return (
    <header>
      <nav></nav>

      <div className="video-container">
        <video autoPlay muted loop className="video">
          <source src={require("../Assets/cover.mp4")} type="video/mp4" />
        </video>
      </div>

      <div className="row">

        <div className="header">

          <div className="col-1-of-2">

            <div className="header-left">
              <h1 className="title-text">
                Welcome, <span>Winter Of Code</span>
              </h1>
              <p className="title-text-description">Extremely intellectual & challenging projects</p>
              <button className="btn marg-top-small">Get Started</button>
            </div>


          </div>

          <div className="col-1-of-2">
            <div className="header-right">
              
            </div>
          </div>
        </div>

      </div>

    </header>
  );
};
