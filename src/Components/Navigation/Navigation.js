import React, { useState, useRef,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { withRouter } from "react-router-dom";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { ExternalLink } from "react-external-link";
import {fadeIn, NavLinksMobile} from "../animation"


export default withRouter((props) => {
  const [IsChecked, setIsChecked] = useState(false);
  const mobile = useMediaQuery("(max-width: 900px)");
 
  let pathName;
  if (
    props &&
    props.history &&
    props.history.location &&
    props.history.location.pathname
  ) {
    pathName = props.history.location.pathname;
  }

  //Animations
  const navLinks = useRef(null)

  useEffect(() => {
    fadeIn(navLinks.current.childNodes)
    if(mobile) {
      
    }
  },[pathName, mobile])
  

  const handleClick = () => {
    setIsChecked(IsChecked ? false : true)
    NavLinksMobile(".animated-link")
  };


  return (
    <>
      <nav className="row">
        <ul ref={navLinks} className="nav-links">
          <div className="margin-right mobile-nav">
            <NavLink to="/" className="linkFix">
              <li>
                <div className="nav-logo">
                  <div className="main-nav-logo-container">
                    <img
                      src={require("../../Assets/org-logo.png")}
                      className="image"
                      draggable='false'
                      alt="winter of code logo"
                    />
                  </div>
                  <p className="nav-logo-text">Winter of Code</p>
                </div>
              </li>
            </NavLink>
            <input
              id="hamburger"
              className="checkbox"
              checked={IsChecked}
              onChange={() => handleClick()}
              type="checkbox"
            />
            <label className="checkbox-label" htmlFor="hamburger"></label>
          </div>

          {/* <a
            style={{
              display: `${mobile ? (IsChecked ? "block" : "none") : "block"}`,
            }}
            href="/mentors"
            onClick={handleClick}
            className="linkFix nav-link-text animated-link"
          >
            <li>Mentors</li>
          </a> */}

          <ExternalLink
            style={{
              display: `${mobile ? (IsChecked ? "block" : "none") : "block"}`,
            }}
            href="https://dscnsec.com/"
            onClick={handleClick}
            className="linkFix nav-link-text animated-link"
          >
            DSC NSEC
          </ExternalLink>

          {pathName === "/"
            ? ScrollLinks.map((scrollLink, index) => (
                <a
                  href={`${scrollLink.to}`}
                  key={index}
                  style={{
                    display: `${
                      mobile ? (IsChecked ? "block" : "none") : "block"
                    }`,
                  }}
                  onClick={handleClick}
                  className={`linkFix nav-link-text animated-link ${
                    scrollLink.lastChild ? "last-child" : null
                  }`}
                >
                  {scrollLink.text}
                </a>
              ))
            : Links.map((link, index) => (
                <NavLink
                  key={index}
                  style={{
                    display: `${
                      mobile ? (IsChecked ? "block" : "none") : "block"
                    }`,
                  }}
                  to={link.to}
                  onClick={handleClick}
                  className={`linkFix animated-link nav-link-text`}
                >
                  {link.text}
                </NavLink>
              ))}

          <a
            style={{
              display: `${mobile ? (IsChecked ? "block" : "none") : "block"}`,
            }}
            href={"#js-footer"}
            onClick={handleClick}
            className="linkFix nav-link-text last-child animated-link"
          >
            Contact Us
          </a>
        </ul>
        {pathName === "/" && <div className="notbygoogle">This program is not by Google.</div>}
      </nav>
    </>
  );
});

const ScrollLinks = [
  {
    to: "/2020/mentors",
    text: "Mentors",
  },
  {
    to: "/2020/organisers",
    text: "Organisers",
  },
  {
    to: "#js-organisations",
    text: "Organisations",
  },
  {
    to: "/2020/student-reports",
    text: "Student Reports",
  },
];

const Links = [
  {
    to: "/2020",
    text: "Home",
  },
  {
    to: "/2020/student-reports",
    text: "Student Reports",
  },
];
