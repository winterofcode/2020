import React, { useRef } from "react";
import {SinglefadeIn, SinglefadeOut} from "../animation"
import {useIntersection} from "react-use"


export default () => {
  let sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  })

  intersection && intersection.intersectionRatio < 0.3 ? SinglefadeOut(".animate"): SinglefadeIn(".animate")

  return (
    <section ref={sectionRef} className="section-program-works--1">
      <div className="row">
        <div className="sub-section">
          <h2 className="animate sub-section-title">Students</h2>
          <p className="animate sub-section-description">
            {" "}
            Students who are interested can register for the Winter
    of Code by filling a form. Students who are selected will work
    with mentors of the organization that they are accepted for. 
    If accepted, students amalgamate with their organizations prior
    to the start of coding and learn more about their organization’s 
    community. Students then have one month to code and meet the 
    deadlines agreed upon with their mentors. On successful completion 
    of the program students will be rewarded with some cool schwags.
          </p>
        </div>
        <div className="sub-section">
          <h2 className="animate sub-section-title">Organisations</h2>
          <p className="animate sub-section-description">
            {" "}
            Open source organizations can apply to be mentor organizations. Once
            accepted, organizations discuss possible ideas with students and
            then decide on the proposals they wish to mentor for the winter.
            They provide feedback to help guide each student through the
            program. Mentors and students work together to determine appropriate
            milestones and requirements for the winter. Mentor interaction is a
            vital part of the program.
          </p>
        </div>
        <div className="sub-section">
          <h2 className="animate sub-section-title">Mentors</h2>
          <p className="animate sub-section-description">
          Mentors guide the students throughout their projects and 
          review their code samples multiple times. They provide valuable feedback
          and suggest possible improvements to the code. They also determine if a
          student has successfully completed the Winter of code 2020 project. Students 
          are then notified of the pass/fail status and schwags are delivered accordingly.
          </p>
        </div>
      </div>
    </section>
  );
};
