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
       <Route path="/mentors" component={MentorsPage} /> 
       <Route path="/organisers" component={Organisers} /> 
      <Route path="/organisation/deep-fusion-ai" component={DeepFusionAI} />
      <Route path="/organisation/absurd-nerd" component={AbsurdNerd} />
      <Route path="/organisation/edualgo" component={EduAlgo} />
      <Route path="/organisation/canvasbird" component={CanvasBird} />
      <Route path="/organisation/dsc-nit-rourkela" component={DSCNITRourkela} />
      <Route path="/organisation/dsc-iem" component={DSCIEM} />
      <Route path="/organisation/fireshort" component={FireShort} />
      <Route path="/organisation/dynopii" component={Dynopii} />
      <Route path="/organisation/dsc-x" component={DscX} />
      <Route path="/organisation/dsc-nsec" component={DSCNSEC} />
      <Route path="/organisation/tesseract-coding" component={TesseractCoding} />
      {/* <Route path="/studentReports" component={StudentReportsPage} /> */}
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </Router>
);

export default AppRouter;
