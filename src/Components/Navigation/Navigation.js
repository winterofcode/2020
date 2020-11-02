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

          <NavLink
            style={{
              display: `${mobile ? (IsChecked ? "block" : "none") : "block"}`,
            }}
            to="/"
            onClick={handleClick}
            className="linkFix nav-link-text animated-link"
          >
            <li>Home</li>
          </NavLink>

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
                  // isDynamic={true}
                  href={`#${scrollLink.to}`}
                  key={index}
                  // offset={0}
                  style={{
                    display: `${
                      mobile ? (IsChecked ? "block" : "none") : "block"
                    }`,
                  }}
                  // to={scrollLink.to}
                  onClick={handleClick}
                  // spy={true}
                  // smooth={true}
                  // duration={500}
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
                    color: "#fff",
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
            // spy={true}
            // smooth={true}
            // duration={500}
            className="linkFix nav-link-text last-child animated-link"
            // activeClass="nav-link-text"
            // isDynamic={true}
          >
            Contact Us
          </a>
        </ul>
      </nav>
    </>
  );
});

const ScrollLinks = [
  {
    to: "js-about-program",
    text: "About",
  },
  {
    to: "js-section-program-works",
    text: "How it Works",
  },
  {
    to: "js-organisations",
    text: "Organisations",
  },
  {
    to: "js-apply",
    text: "Apply",
  },
];

const Links = [];
