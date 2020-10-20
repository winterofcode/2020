import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import {withRouter} from "react-router-dom";
import useMediaQuery from "../../Hooks/useMediaQuery"
import * as Scroll from 'react-scroll'
import { ExternalLink } from 'react-external-link';

const ScrollLink = Scroll.Link;



export default withRouter((props) => {
  const [IsChecked, setIsChecked] = useState(false);
  const mobile = useMediaQuery('(max-width: 900px)');
  
  const handleClick = () => {
    setIsChecked(false);
  }
  // const handleReroute = () => {
  //   window.location.replace('https://dscnsec.com/')
  // }
  let pathName;
  if(props && props.history && props.history.location && props.history.location.pathname){
    pathName = props.history.location.pathname;
  }
  // const routed = (props) => {
  //   console.log(props.history.location.pathname)
  //   if(!props.history.location.pathname === "/") {
  //     ScrollLink = Links;
  //   }
  // }

  // routed(props);

  return (
    <>
  <nav className="row">

    <ul className="nav-links">

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
      <input id="hamburger" className="checkbox" checked={IsChecked} onChange={() => setIsChecked(IsChecked ? false : true )} type="checkbox" />
      <label className="checkbox-label" htmlFor="hamburger">
      </label>
      </div>

      <NavLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}`, color: "#fff" }} to="/" onClick={handleClick} className="linkFix nav-link-text">
        <li>Home</li>
      </NavLink>

      <ExternalLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}`, color: "#fff" }}  href="https://dscnsec.com/" onClick={handleClick} className="linkFix nav-link-text">
        <li>DSC NSEC</li>
      </ExternalLink>

      {pathName === "/" ? (ScrollLinks.map((scrollLink, index) => (
        <ScrollLink key={index} style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}` }} to={scrollLink.to} onClick={handleClick} spy={true} smooth={true} duration={500} className={`linkFix nav-link-text ${scrollLink.lastChild ? "last-child" : null}`} >{scrollLink.text}</ScrollLink>
      ))) : Links.map((link, index) => <NavLink key={index} style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}`, color: "#fff"  }} to={link.to} onClick={handleClick} className={`linkFix nav-link-text`} >{link.text}</NavLink>) }

      <ScrollLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}` }} to="js-footer" onClick={handleClick} spy={true} smooth={true} duration={500} className="linkFix nav-link-text last-child" >Contact Us</ScrollLink>
    </ul>

  </nav>
  </>
  )
});

const ScrollLinks = [
  {
    to: "js-about-program",
    text: "About"
  },
  {
    to: "js-section-program-works",
    text: "How it Works"
  },
  {
    to: "js-organisations",
    text: "Organisations"
  },
  {
    to: "js-apply",
    text: "Apply"
  },
]


const Links = [

]