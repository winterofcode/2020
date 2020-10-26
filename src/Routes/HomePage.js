import React from "react";
import AboutProgram from "../Components/AboutProgram/AboutProgram";
import HowProgramWorks from "../Components/HowProgramWorks/HowProgramWorks";
import LandingPage from "../Components/LandingPage/LandingPage";
import ReviewsInLanding from "../Components/ReviewsInLanding";
import Timeline from "../Components/Timeline/Timeline";
import styled from "styled-components";
import Organisations from "../Components/Organisations/Organisations";
import Apply from "../Components/Apply/Apply";
import HowProgramWorksAppend from "../Components/HowProgramWorksAppend/HowProgramWorksAppend";

const LandingPageHeight = styled.div`
height: 90vh;
background-color: #204987;
`

export default () => {
  return (
    <>
    <LandingPageHeight>
    <LandingPage />
    </LandingPageHeight>
      <AboutProgram />
      <HowProgramWorks />
      <HowProgramWorksAppend />
      <Organisations />
      <Timeline />
      <ReviewsInLanding />
      <Apply />
    </>
  );
};
