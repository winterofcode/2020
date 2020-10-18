import React from "react"
import {Link} from "react-router-dom"

export default ({color}) => (
    <Link to="/" className="linkFix margin-right">
        <li>
          <div className="nav-logo">
            <div className="main-nav-logo-container">
              <img
                src={require("../Assets/org-logo.png")}
                className="image"
                alt="winter of code logo"
              />
            </div>
            <p className="nav-logo-text">Winter of Code</p>
          </div>
        </li>
      </Link>
)