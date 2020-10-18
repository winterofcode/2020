import React from "react";
import "./LandingPage.scss";
import {Link} from "react-router-dom"

export default () => {
  return (
    <header>
      <div className="row">

        <div className="header">

          <div className="col-1-of-2">

          <div className="header-right">
          <h1 className="title-text">
            Welcome, <span>Winter Of Code</span>
          </h1>
          <p className="title-text-description">Extremely intellectual & challenging projects</p>
          <Link to="/" className="btn" id="btn-white">Get Started</Link>
        </div>


          </div>

          <div className="col-1-of-2">
          <div className="header-left">
          <div className="illustration-container">
          <img src={require("../../Assets/16.png")} className="image" alt="illustration" />
          </div>
          </div>
          </div>
        </div>

      </div>

    </header>
  );
};
