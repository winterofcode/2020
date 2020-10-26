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
            Interested students can register for the Winter of Code. Selected
            students work with mentors of their organization they are accepted
            for. If accepted, students integrate with their organizations prior
            to the start of coding, learning more about their organization’s
            community. Students then have the month to code, meeting the
            deadlines agreed upon with their mentors.
          </p>
        </div>
        <div className="sub-section">
          <h2 className="animate sub-section-title">Organisations</h2>
          <p className="animate sub-section-description">
            {" "}
            Open source organizations can apply to be mentor organizations. Once
            accepted, organizations discuss possible ideas with students and
            then decide on the proposals they wish to mentor for the summer.
            They provide feedback to help guide each student through the
            program. Mentors and students work together to determine appropriate
            milestones and requirements for the summer. Mentor interaction is a
            vital part of the program. Applications for Mentor Organizations is
            now open.
          </p>
        </div>
        <div className="sub-section">
          <h2 className="animate sub-section-title">Mentors</h2>
          <p className="animate sub-section-description">
            Mentors review student code samples multiple times to give feedback
            and determine if the students have successfully completed their
            Winter of Code 2019 project. Students are then notified of the
            pass/fail status and schwags are delivered to successful students.
          </p>
        </div>
      </div>
    </section>
  );
};
