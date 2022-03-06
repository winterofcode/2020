import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "../Routes/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "./Footer/Footer";
import styled from "styled-components";

import ScrollToTop from "./ScrollToTop";
import DSCNSEC from "../Routes/DSCNSEC";
import DSCIEM from "../Routes/DSCIEM";
import DeepFusionAI from "../Routes/DeepFusionAI";
import DSCNITRourkela from "../Routes/NITRourkela";
import EduAlgo from "../Routes/EduAlgo";
import AbsurdNerd from "../Routes/AbsurdNerd";
import CanvasBird from "../Routes/CanvasBird";
import FireShort from "../Routes/FireShot";
import MentorsPage from "../Routes/MentorsPage";
import TesseractCoding from "../Routes/TesseractCoding";
import DscX from "../Routes/DscX";
import Dynopii from "../Routes/Dynopii";
import Organisers from "../Routes/Organisers";
import StudentReportsPage from "../Routes/StudentReportsPage";
import StudentReport from "../Routes/StudentReport/StudentReport";

const NavigationColor = styled.div`
  background-color: #204987;
  .row {
    margin-bottom: 0;

    @media only screen and (max-width: 56.25em) {
      padding: 0;
    }
  }
  padding: 0 3rem;
`;

const AppRouter = () => (
  <Router>
    <NavigationColor>
      <Navigation />
    </NavigationColor>
    <ScrollToTop />
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
       <Route path="/2020/mentors" component={MentorsPage} /> 
       <Route path="/2020/organisers" component={Organisers} /> 
      <Route path="/2020/organisation/deep-fusion-ai" component={DeepFusionAI} />
      <Route path="/2020/organisation/absurd-nerd" component={AbsurdNerd} />
      <Route path="/2020/organisation/edualgo" component={EduAlgo} />
      <Route path="/2020/organisation/canvasbird" component={CanvasBird} />
      <Route path="/2020/organisation/dsc-nit-rourkela" component={DSCNITRourkela} />
      <Route path="/2020/organisation/dsc-iem" component={DSCIEM} />
      <Route path="/2020/organisation/fireshort" component={FireShort} />
      <Route path="/2020/organisation/dynopii" component={Dynopii} />
      <Route path="/2020/organisation/dsc-x" component={DscX} />
      <Route path="/2020/organisation/dsc-nsec" component={DSCNSEC} />
      <Route path="/2020/organisation/tesseract-coding" component={TesseractCoding} />
      <Route path="/2020/student-reports/:name" component={StudentReport} />
      <Route path="/2020/student-reports" component={StudentReportsPage} />
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </Router>
);

export default AppRouter;
