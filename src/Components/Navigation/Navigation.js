import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import {withRouter} from "react-router-dom";
import NavLogoLink from "../NavLogoLink";

export default withRouter(() => (
  <nav className="row">

    <ul className="nav-links">

      <NavLogoLink />

      <Link to="/aboutus" className="linkFix nav-link-text">
        <li>Home</li>
      </Link>
      <Link to="/aboutus" className="linkFix nav-link-text">
        <li>DSC NSEC</li>
      </Link>
      <Link to="/aboutus" className="linkFix nav-link-text">
        <li>About</li>
      </Link>
      <Link to="/aboutus" className="linkFix nav-link-text">
        <li>Organisations</li>
      </Link>
      <Link to="/aboutus" className="linkFix nav-link-text">
        <li>Apply</li>
      </Link>
      <Link to="/aboutus" className="linkFix nav-link-text last-child">
        <li>Contact Us</li>
      </Link>
    </ul>

  </nav>
));
