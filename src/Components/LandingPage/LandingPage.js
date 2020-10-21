import React , {useRef,useEffect} from "react";
import "./LandingPage.scss";
import {Link} from "react-router-dom";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap, {TimelineLite, Power2} from "gsap";

gsap.registerPlugin(CSSRulePlugin)

export default () => {

  let IllustrationContainer = useRef(null)
  let Illustration = useRef(null)
  let IllustrationReveal = CSSRulePlugin.getRule(".illustration-container:after");

  let T1 = new TimelineLite();

  useEffect(() => {
    T1.to(IllustrationContainer, 1,{ css: {visibility: "visible"}}).to(
      IllustrationReveal,
      1,
      {
        width: "0%", ease: Power2.easeInOut 
      }
    ).from(Illustration, 2, {scale: 4, ease: Power2.easeInOut, delay: -1.6})
  })

  return (
    <header id="js-header">
      <div className="row">

        <div className="header">

          <div className="col-1-of-2">
          <div>
          <div ref={e => IllustrationContainer = e} className="header-left">
          <div className="illustration-container">
          <img ref={e => Illustration = e} src={require("../../Assets/latter.png")} className="image img" alt="illustration" />
          </div>
          </div>
          </div>


          </div>

          <div className="col-1-of-2">
          <div className="header-right">
          <h1 className="title-text">
            Welcome <span>Winter Of Code</span>
          </h1>
          <p className="title-text-description">Extremely intellectual & challenging projects</p>
          <Link to="/" className="btn" id="btn-white">Get Started</Link>
        </div>
          </div>
        </div>

      </div>

    </header>
  );
};
