import React from "react";
import { Link } from "react-router-dom";
// import NavLogoLink from "../NavLogoLink";
import "./Footer.scss";

export default () => (
  <footer className="footer">
    <div className="row">
      <div className="footer-links-container">

        <ul className="main-links">

          <li>
            <Link to="/" className="linkFix margin-right">
              <div className="nav-logo">
                <div className="main-nav-logo-container">
                  <img
                    src={require("../../Assets/org-logo.png")}
                    className="image"
                    alt="winter of code logo"
                  />
                </div>
                <p className="nav-logo-text">Winter of Code</p>
              </div>
            </Link>
            <Link to="/">
            <div className="footer-logo-container">
            
            </div>
            </Link>
          </li> 

        </ul>

        <ul className="projects">njk</ul>
        <ul className="organisations">nkj</ul>
        <ul className="dscnsec handles">nkj</ul>
      </div>
    </div>
  </footer>
);
