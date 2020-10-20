import React from "react";
import "./HowProgramWorks.scss";
// import {Link} from "react-router-dom"

export default () => (
  <section className="section-program-works" id="js-section-program-works">
    <div className="row">
      <h1 className="section-title">How does the program works ?</h1>
      <div className="grid">
        <div className="left">
        <p className="howItWorks-text">
        Winter of Code by Developer Students Club NSEC,<br></br> brings in
        students, organizations, and mentors together for <br></br>
        <span>
          {" "}
          a month-long extravaganza of Open Source contribution<br></br>
        </span>{" "}
        and learning through that journey.<br></br>Here is what the program
        offers for students, organizations, and mentors.
      </p>
        </div>
        <div className="right">
        <div className="illustration-container--1">
        <img
          src={require("../../Assets/how.png")}
          className="image"
          alt="how-it-works-illustration"
        />
      </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="sub-section">
        <h2 className="sub-section-title">Students</h2>
        <p className="sub-section-description">
          {" "}
          Interested students can register for the Winter of Code. Selected
          students work with mentors of their organization they are accepted
          for. If accepted, students integrate with their organizations prior to
          the start of coding, learning more about their organization’s
          community. Students then have the month to code, meeting the deadlines
          agreed upon with their mentors.
        </p>
      </div>
      <div className="sub-section">
        <h2 className="sub-section-title">Organisations</h2>
        <p className="sub-section-description">
          {" "}
          Interested students can register for the Winter of Code. Selected
          students work with mentors of their organization they are accepted
          for. If accepted, students integrate with their organizations prior to
          the start of coding, learning more about their organization’s
          community. Students then have the month to code, meeting the deadlines
          agreed upon with their mentors.
        </p>
      </div>
      <div className="sub-section">
        <h2 className="sub-section-title">Mentors</h2>
        <p className="sub-section-description">
          Mentors review student code samples multiple times to give feedback
          and determine if the students have successfully completed their Winter
          of Code 2019 project. Students are then notified of the pass/fail
          status and schwags are delivered to successful students.
        </p>
      </div>
    </div>
  </section>
);
