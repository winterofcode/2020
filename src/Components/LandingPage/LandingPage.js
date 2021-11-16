import React , {useRef,useEffect} from "react";
import "./LandingPage.scss";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap, {TimelineLite, Power2} from "gsap";
import {fadeInHeaderText} from "../animation"

gsap.registerPlugin(CSSRulePlugin)
gsap.registerPlugin(Power2, TimelineLite);


export default () => {
  let HeaderText = useRef(null)

  let IllustrationContainer = useRef(null)
  let Illustration = useRef(null)
  let IllustrationReveal = CSSRulePlugin.getRule(".illustration-container:after")

  let T1 = new TimelineLite();

  useEffect(() => {

    fadeInHeaderText(HeaderText.current.childNodes)

    T1.to(IllustrationContainer, 1,{ css: {visibility: "visible"}}).to(
      IllustrationReveal,
      1,
      {
        width: "0%", ease: Power2.easeInOut 
      }
    ).from(Illustration, 2, {scale: 2, ease: Power2.easeInOut, delay: -1.6})
  })

  return (
    <header id="js-header">
      <div className="row">

        <div className="header">

          <div className="col-1-of-2">
          <div>
          <div ref={e => IllustrationContainer = e} className="header-left">
          <div className="illustration-container">
          <img ref={e => Illustration = e} draggable='false' src={require("../../Assets/latter.png")} className="image img" alt="illustration" />
          </div>
          </div>
          </div>


          </div>

          <div className="col-1-of-2">
          <div ref={HeaderText} className="header-right">
          <h1 className="title-text">
            Welcome to
            </h1>
          <h1 className="title-text">
            <span className="title-text-span">Winter Of Code</span>
            </h1>
          <p className="title-text-description">An initiative of DSC NSEC</p>
          {/* <a href="#js-section-program-works" className="btn" id="btn-white">Get Started</a> */}
          <button className="btn" id="btn-white">Winter of Code 2021 Coming Soon</button>
        </div>

          </div>
        </div>

      </div>

    </header>
  );
};
