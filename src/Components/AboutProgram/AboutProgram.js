import React, { useRef } from "react";
import {SinglefadeIn, SinglefadeOut} from "../animation"
import {useIntersection} from "react-use"
import "./AboutProgram.scss";

export default () => {
  let sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  })

  intersection && intersection.intersectionRatio < 0.3 ? SinglefadeOut(".animate"): SinglefadeIn(".animate")
  return (
    <section ref={sectionRef} className="section-about-program" id="js-about-program">
      <div className="row">
        <h1 className="animate section-title">About The Program</h1>
        <h2 className="animate about-text">
          The Program is{" "}
          <span>statistically proven to increase opensource contributions</span>{" "}
          and{" "}
          <span>
            getting more chances of getting accepted in Google Summer of
            Code(GSOC).
          </span>
        </h2>
        <p className="animate description">
          Winter of Code is here to light up your winter spirits with the wide
          world of open source development. This initiative aims to prepare you
          for the grand Google Summer of Code. Join us for a month-long
          programming project with an open-source organization.
        </p>
        <p className="animate description">
        As a part of the Winter of Code, students are paired with mentors from
        the participating organisation. This initiative aims at developing
        your skills in real-world software development in a wide range of
        specializations. In turn, the participating organisation gets to know
        your potential and also gives you the correct exposure that you need
        in your formative years. Above all, we hope you get encouraged into
        the world of open source and develop more code for the benefit of all.
        </p>
      </div>
    </section>
);
} 

