import React, {useRef} from "react";
import "./HowProgramWorks.scss";
import {useIntersection} from "react-use"
import {SinglefadeIn,SinglefadeOut} from "../animation"

export default () =>  {

  let sectionRef = useRef(null)
  let titleref = useRef(null)
  let pref = useRef(null)
  let imgref = useRef(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  })

  intersection && intersection.intersectionRatio < 0.4 ? SinglefadeOut(titleref.current): SinglefadeIn(titleref.current)
  intersection && intersection.intersectionRatio < 0.4 ? SinglefadeOut(pref.current,0.2): SinglefadeIn(pref.current,0.2)
  intersection && intersection.intersectionRatio < 0.4 ? SinglefadeOut(imgref.current,0.3): SinglefadeIn(imgref.current,0.3)

  return (
  <section ref={sectionRef} className="section-program-works" id="js-section-program-works">
    <div className="row">
      <h1 ref={titleref} className=" section-title">Let's Build Something Awesome Together</h1>
      <div className="grid">
        <div className="left">
        <p ref={pref} className=" howItWorks-text">
       Developer Students Club of NSEC brings to you Winter of Code
    which is a month-long extravaganza of Open Source contribution, 
    bringing together students, organisations and mentors learning and
    growing through that journey. Here is what the program has to offer
    for students, organizations, and mentors.
      </p>
        </div>
        <div className="right">
        <div ref={imgref} className=" illustration-container--1">
        <img
          src={require("../../Assets/how.png")}
          className="image"
          alt="how-it-works-illustration"
        />
      </div>
        </div>
      </div>
    </div>
  </section>
)};
