import React from "react";
import AboutProgram from "../Components/AboutProgram/AboutProgram";
import HowProgramWorks from "../Components/HowProgramWorks/HowProgramWorks";
import LandingPage from "../Components/LandingPage/LandingPage";
import Timeline from "../Components/Timeline/Timeline";
import styled from "styled-components";
import Organisations from "../Components/Organisations/Organisations";
import Apply from "../Components/Apply/Apply";
import HowProgramWorksAppend from "../Components/HowProgramWorksAppend/HowProgramWorksAppend";
import AccordionSection from "../Components/AccordionSection/AccordionSection"
import Schwags from "../Components/Schwags/Schwags";
const LandingPageHeight = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    align-items: stretch;
}
  background-color: #204987;
`;

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
      <Schwags />
      <Apply />
      <AccordionSection />
    </>
  );
};
