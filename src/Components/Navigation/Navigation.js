import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import {withRouter} from "react-router-dom";
import styled from "styled-components"
import useMediaQuery from "../../Hooks/useMediaQuery"

const RightLink = styled(NavLink)`
    @media only screen and (max-width: 56.25em) {
        display: ${props => props.IsChecked ? "block" : "none"};
       }
`

export default withRouter(() => {
  const [IsChecked, setIsChecked] = useState(false);
  const mobile = useMediaQuery('(max-width: 900px)');
  
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
      <input id="hamburger" className="checkbox" onChange={() => setIsChecked(IsChecked ? false : true )} type="checkbox" />
      <label className="checkbox-label" htmlFor="hamburger">
      </label>
      </div>

      {<><RightLink style={{
        display: `${IsChecked ? "block" : "none"}` 
        }} to="/" className="linkFix nav-link-text">
        <li>Home</li>
      </RightLink>
      <RightLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}` }}  to="http://www.dscnsec.com" className="linkFix nav-link-text">
        <li>DSC NSEC</li>
      </RightLink>
      <RightLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}` }} to="/" className="linkFix nav-link-text">
        <li>About</li>
      </RightLink>
      <RightLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}` }} to="/" className="linkFix nav-link-text">
        <li>Organisations</li>
      </RightLink>
      <RightLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}` }} to="/" className="linkFix nav-link-text">
        <li>Apply</li>
      </RightLink>
      <RightLink style={{display: `${ mobile ? IsChecked ? "block" : "none" : "block"}` }} to="/" className="linkFix nav-link-text last-child">
        <li>Contact Us</li>
      </RightLink></>}
    </ul>

  </nav>
  </>
  )
});
