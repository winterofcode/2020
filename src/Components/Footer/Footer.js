import React from "react";
import { Link } from "react-router-dom";
// import NavLogoLink from "../NavLogoLink";
import "./Footer.scss";
import {Instagram,Facebook,Twitter,Slack} from "../../Components/Icons"

export default () => (
  <footer className="footer" id="js-footer">
    <div className="row">
      <div className="footer-links-container">

        <ul className="main-links">
          <li className="woc-link">
            <Link to="/" className="linkFix margin-right">
              <div className="nav-logo">
                <div className="main-nav-logo-container">
                  <img
                    src={require("../../Assets/org-logo.png")}
                    className="image"
                    alt="winter of code logo"
                  />
                </div>
                <p className="nav-logo-text nav-logo-text-footer">Winter of Code</p>
              </div>
            </Link>
          </li>  

          <li>
          <div className="social-links">
            <Link to="/">
            <Instagram fill={"#DA003D"} width={30} height={30} />
            </Link>
            <Link to="/">
            <Facebook fill="#4267B2" width={30} height={30} />
            </Link>
            <Link to="/">
            <Twitter fill="#00acee" width={30} height={30} />
            </Link>
            <Link to="/">
            <Slack fill="#ECB22E" width={40} height={40} />
            </Link>
        
            </div>
          </li>

          <li>
          <p className="footer-text">The Winter of Code is a program aimed to increase participation for the Google Summer of Code program among students in colleges and universities.</p>
          <p className="footer-text copyright">&copy;Winter of Code 2020</p>
          </li>

        </ul>

        <ul className="projects">
        <li className="footer-title">Projects</li>
        {Projects.map((link,index) => <li className="list-link" key={index}><Link className="footer-link" to={link.url}>{link.title}</Link></li>)}
        </ul>

        <ul className="organisations">
        <li className="footer-title">Organisations</li>
        <div className="organisation-links">
        {Organisations.map((link, index) => <li key={index} className="list-link"><Link className="footer-link" to={link.url}>{link.title}</Link></li>)}
        </div>
        </ul>

        <ul className="dscnsec handles">
        <li className="footer-title">DSC NSEC Handles</li>
        <div className="dsc-social-links">
        {DSC_NSEC_Links.map((link, index) => <li key={index} className="list-link"><Link className="footer-link" to={link.url}>{link.title}</Link></li>)}
        </div>
        </ul>

      </div>
    </div>
  </footer>
);

const Projects = [
  {
    title: "DSC NSEC Application",
    url: "/", //github link
  },
  {
    title: "Forum App",
    url: "/", //github link
  },
  {
    title: "Search Engine",
    url: "/", //github link
  },
  {
    title: "Aify",
    url: "/", //github link
  },
  {
    title: "DSC NSEC Projects Showcase",
    url: "/", //github link
  }
]

const Organisations = [
  {
    title: "DSC NSEC",
    url: "/"
  },
  {
    title: "DSC IEM",
    url: "/"
  },
  {
    title: "The Code Foundation (TCF)",
    url: "/"
  },
  {
    title: "Kol70",
    url: "/"
  },
  {
    title: "Vishwajeet.js",
    url: "/"
  }
]

const DSC_NSEC_Links = [
  {
    title: "Instagram",
    url: "/"
  },
  {
    title: "Twitter",
    url: "/"
  },
  {
    title: "Telegram",
    url: "/"
  },
  {
    title: "Youtube",
    url: "/"
  },
  {
    title: "Slack",
    url: "/"
  },
]